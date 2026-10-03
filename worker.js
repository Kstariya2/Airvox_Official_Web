export default {
  async fetch(request, env) {
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

        return Response.json({
          success: true,
          message: "Your enquiry has been submitted successfully."
        });

      } catch (error) {
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
