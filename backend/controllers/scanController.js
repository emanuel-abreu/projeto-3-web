const express = require("express");
const router = express.Router();
const { submitScan, getResult } = require("../models/urlscanModel");

router.post("/scan", async (req, res) => {
  try {
    const { url } = req.body;
    const scanInfo = await submitScan(url);
    res.json(scanInfo);
  } catch (err) {
    console.error(
      "Erro ao submitScan:",
      err.response?.status,
      err.response?.data || err.message
    );
    res.status(err.response?.status || 500).json({
      error: err.response?.data?.message || err.response?.data || err.message,
    });
  }
});

router.get("/result/:uuid", async (req, res) => {
  try {
    const result = await getResult(req.params.uuid);
    res.json(result);
  } catch (err) {
    const status = err.response?.status || 500;
    res.status(status).json({ error: err.response?.data || err.message });
  }
});

module.exports = router;
