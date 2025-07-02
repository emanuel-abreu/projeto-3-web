const axios = require("axios");
const API_KEY = process.env.URLSCAN_API_KEY;
const BASE = "https://urlscan.io/api/v1";

async function submitScan(url) {
  const resp = await axios.post(
    `${BASE}/scan`,
    { url, visibility: "public" },
    { headers: { "Content-Type": "application/json", "API-Key": API_KEY } }
  );
  return resp.data;
}

async function getResult(uuid) {
  const resp = await axios.get(`${BASE}/result/${uuid}/`, {
    headers: { "API-Key": API_KEY },
  });
  return resp.data;
}

module.exports = { submitScan, getResult };
