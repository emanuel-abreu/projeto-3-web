export function renderScanStatus({ status, uuid, data }) {
  const c = document.getElementById("scan-container");
  if (status === "submitted") {
    c.innerHTML = `<p>Scan submetido! UUID: <code>${uuid}</code>. Aguarde...</p>`;
  } else if (status === "finished") {
    c.innerHTML = `
      <h3>Resultado do Scan</h3>
      <p><strong>URL:</strong> ${data.page.url}</p>
      <p><strong>Domínio:</strong> ${data.page.domain}</p>
      <p><strong>País:</strong> ${data.page.country}</p>
      <p><strong>Servidor:</strong> ${data.page.server}</p>
      <p><strong>IP:</strong> ${data.page.ip}</p>
      <p><a href="${data.task.reportURL}" target="_blank">Ver relatório completo</a></p>
    `;
  }
}

export function showError(msg) {
  document.getElementById(
    "scan-container"
  ).innerHTML = `<p class="error"> ${msg}</p>`;
}
