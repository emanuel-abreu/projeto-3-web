import { scanUrl } from "./controllers/scanController.js";

document.getElementById("btn-scan").addEventListener("click", () => {
  const url = document.getElementById("input-url").value.trim();
  if (url) scanUrl(url);
});
