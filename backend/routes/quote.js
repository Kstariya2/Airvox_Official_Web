const express = require("express");
const router = express.Router();
const { quoteValidation, submitQuote } = require("../controllers/quoteController");

/**
 * POST /api/quote
 * Submit a new freight quote request
 */
router.post("/quote", quoteValidation, submitQuote);

module.exports = router;
