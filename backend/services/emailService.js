const nodemailer = require("nodemailer");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    this.to = process.env.GMAIL_USER;
  }

  /**
   * Build a clean, professional HTML email body
   */
  buildEmailHTML(data) {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#050B18;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#0A1628;border:1px solid rgba(255,107,0,0.2);border-radius:12px;overflow:hidden;">

    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg,#FF6B00,#FF8C33);padding:32px 24px;text-align:center;">
        <h1 style="color:#050B18;margin:0;font-size:22px;letter-spacing:1px;">✈ AIRVOX LOGISTICS</h1>
        <p style="color:rgba(5,11,24,0.7);margin:8px 0 0;font-size:13px;">New Quote Request Received</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:32px 24px;">
        <h2 style="color:#FF6B00;margin:0 0 24px;font-size:16px;letter-spacing:0.5px;">SUBMISSION DETAILS</h2>

        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:140px;">Full Name</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px;">${this.escapeHTML(data.fullName)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Company</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px;">${this.escapeHTML(data.company) || "—"}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Email</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#FF6B00;font-size:14px;">${this.escapeHTML(data.email)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Phone</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px;">${this.escapeHTML(data.phone) || "—"}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Origin</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px;">${this.escapeHTML(data.origin)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Destination</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#fff;font-size:14px;">${this.escapeHTML(data.destination)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Service Type</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#FF6B00;font-size:14px;font-weight:600;">${this.escapeHTML(data.serviceType)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;color:rgba(255,255,255,0.5);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">Shipment Details</td>
            <td style="padding:12px 0;color:#fff;font-size:14px;line-height:1.6;">${this.escapeHTML(data.shipmentDetails) || "—"}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:20px 24px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
        <p style="color:rgba(255,255,255,0.3);font-size:11px;margin:0;">Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })} (GST)</p>
        <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:8px 0 0;">AIRVOX LOGISTICS — Move The World Without Limits</p>
      </td>
    </tr>

  </table>
</body>
</html>`;
  }

  /**
   * Build plain-text fallback
   */
  buildEmailText(data) {
    return `
AIRVOX LOGISTICS — New Quote Request
══════════════════════════════════════

Full Name:       ${data.fullName}
Company:         ${data.company || "—"}
Email:           ${data.email}
Phone:           ${data.phone || "—"}
Origin:          ${data.origin}
Destination:     ${data.destination}
Service Type:    ${data.serviceType}

Shipment Details:
${data.shipmentDetails || "—"}

══════════════════════════════════════
Submitted: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })} (GST)
    `.trim();
  }

  /**
   * Send the email
   */
  async sendQuoteEmail(data) {
    const mailOptions = {
      from: `"Airvox Logistics" <${process.env.GMAIL_USER}>`,
      to: this.to,
      subject: "New Airvox Quote Request",
      text: this.buildEmailText(data),
      html: this.buildEmailHTML(data),
      replyTo: data.email
    };

    const info = await this.transporter.sendMail(mailOptions);
    return info;
  }

  /**
   * Escape HTML entities to prevent XSS in email
   */
  escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

module.exports = new EmailService();
