const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const quoteRoutes = require("./routes/quote");

const app = express();
const PORT = process.env.PORT || 3001;

/* ── Security Middleware ── */
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(cors({
  origin: "*",
  methods: ["POST", "GET"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

/* ── Rate Limiting ── */
const quoteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,   // 15 minutes
  max: 10,                     // max 10 requests per window
  message: {
    success: false,
    error: "Too many requests. Please try again in 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use("/api/quote", quoteLimiter);

/* ── Routes ── */
app.use("/api", quoteRoutes);

/* ── Health Check ── */
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "airvox-logistics-api" });
});

/* ── 404 Handler ── */
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Endpoint not found" });
});

/* ── Global Error Handler ── */
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({
    success: false,
    error: "Internal server error. Please try again later."
  });
});

app.listen(PORT, () => {
  console.log(`✈ Airvox Logistics API running on port ${PORT}`);
  console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`  Health: http://localhost:${PORT}/health`);
});
