export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Test endpoint
    if (url.pathname === "/api/test") {
      const result = await env.DB
        .prepare("SELECT COUNT(*) AS count FROM enquiries")
        .first();

      return Response.json({
        success: true,
        enquiries: result.count
      });
    }

    // Quote / enquiry submission
    if (url.pathname === "/api/quote" && request.method === "POST") {
      try {
        const data = await request.json();

        const {
          fullName,
          company,
          email,
          phone,
          origin,
          destination,
          serviceType,
          shipmentDetails
        } = data;

        if (!fullName || !email) {
          return Response.json(
            {
              success: false,
              message: "Name and email are required."
            },
            { status: 400 }
          );
        }

        // 1. Save to D1
        await env.DB
          .prepare(`
            INSERT INTO enquiries
            (
              name,
              company,
              email,
              phone,
              origin,
              destination,
              service,
              shipment_details
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `)
          .bind(
            fullName,
            company || "",
            email,
            phone || "",
            origin || "",
            destination || "",
            serviceType || "",
            shipmentDetails || ""
          )
          .run();

        // 2. Send to Google Sheets in background
        ctx.waitUntil((async () => {
          try {
            const sheetUrl = new URL(env.GOOGLE_SHEET_WEBHOOK);
            sheetUrl.searchParams.set(
              "key",
              env.SHEETS_WEBHOOK_SECRET
            );

            const body = JSON.stringify({
              fullName,
              company: company || "",
              email,
              phone: phone || "",
              origin: origin || "",
              destination: destination || "",
              serviceType: serviceType || "",
              shipmentDetails: shipmentDetails || ""
            });

            let response = await fetch(sheetUrl.toString(), {
              method: "POST",
              body,
              redirect: "manual"
            });

            // Google Apps Script may redirect the POST.
            if (
              response.status >= 300 &&
              response.status < 400
            ) {
              const location = response.headers.get("Location");

              if (location) {
                response = await fetch(location, {
                  method: "POST",
                  body,
                  redirect: "follow"
                });
              }
            }

            if (!response.ok) {
              console.error(
                "Google Sheets webhook failed:",
                response.status
              );
              return;
            }

            console.log("Google Sheets sync successful");
          } catch (error) {
            console.error(
              "Google Sheets sync error:",
              error
            );
          }
        })());

        return Response.json({
          success: true,
          message: "Your enquiry has been submitted successfully."
        });

      } catch (error) {
        console.error("Quote error:", error);

        return Response.json(
          {
            success: false,
            message: "Unable to submit enquiry."
          },
          { status: 500 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};
