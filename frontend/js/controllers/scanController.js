import { requestScan, fetchResult } from "../models/urlscanModel.js";
import { renderScanStatus, showError } from "../views/scanView.js";

export async function scanUrl(rawUrl) {
  try {
    let url = rawUrl.trim();
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    const { uuid } = await requestScan(url);
    renderScanStatus({ status: "submitted", uuid });

    const start = Date.now();
    const timeout = 60_000;
    async function poll() {
      try {
        const data = await fetchResult(uuid);
        renderScanStatus({ status: "finished", data });
      } catch (err) {
        if (Date.now() - start < timeout) {
          setTimeout(poll, 2000);
        } else {
          showError("Tempo de espera excedido para resultado do scan.");
        }
      }
    }
    setTimeout(poll, 10000);
  } catch (err) {
    showError(err.message);
  }
}
