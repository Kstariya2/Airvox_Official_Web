const { body, validationResult } = require("express-validator");
const emailService = require("../services/emailService");

/* ── Validation Rules ── */
const quoteValidation = [
  body("fullName")
    .trim()
    .notEmpty().withMessage("Full name is required")
    .isLength({ min: 2, max: 100 }).withMessage("Full name must be 2-100 characters"),

  body("company")
    .trim()
    .optional()
    .isLength({ max: 100 }).withMessage("Company name too long"),

  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phone")
    .trim()
    .optional()
    .isLength({ max: 20 }).withMessage("Phone number too long"),

  body("origin")
    .trim()
    .notEmpty().withMessage("Origin is required")
    .isLength({ max: 100 }).withMessage("Origin too long"),

  body("destination")
    .trim()
    .notEmpty().withMessage("Destination is required")
    .isLength({ max: 100 }).withMessage("Destination too long"),

  body("serviceType")
    .trim()
    .notEmpty().withMessage("Service type is required")
    .isIn(["Air Freight", "Ocean Freight", "Land Transport", "Warehousing", "Supply Chain"])
    .withMessage("Invalid service type"),

  body("shipmentDetails")
    .trim()
    .optional()
    .isLength({ max: 2000 }).withMessage("Shipment details too long (max 2000 chars)")
];

/* ── Controller ── */
const submitQuote = async (req, res) => {
  try {
    /* Check validation errors */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: errors.array().map(e => ({ field: e.path, message: e.msg }))
      });
    }

    const {
      fullName, company, email, phone,
      origin, destination, serviceType, shipmentDetails
    } = req.body;

    /* Sanitized data */
    const quoteData = {
      fullName: fullName.trim(),
      company: (company || "").trim(),
      email: email.trim(),
      phone: (phone || "").trim(),
      origin: origin.trim(),
      destination: destination.trim(),
      serviceType: serviceType.trim(),
      shipmentDetails: (shipmentDetails || "").trim()
    };

    /* Send email */
    const info = await emailService.sendQuoteEmail(quoteData);

    console.log(`✉ Quote email sent: ${info.messageId} — from ${quoteData.email}`);

    return res.status(200).json({
      success: true,
      message: "Quote request submitted successfully. Our team will contact you shortly."
    });

  } catch (error) {
    console.error("Quote submission error:", error.message);

    return res.status(500).json({
      success: false,
      error: "We couldn't process your request right now. Please try again later or contact support."
    });
  }
};

module.exports = { quoteValidation, submitQuote };
