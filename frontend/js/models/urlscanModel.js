export async function requestScan(url) {
  const resp = await fetch("/api/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  if (!resp.ok) throw new Error(`Erro ao submeter scan: ${resp.status}`);
  return resp.json();
}

export async function fetchResult(uuid) {
  const resp = await fetch(`/api/result/${uuid}`);
  if (!resp.ok)
    throw new Error(`Resultado ainda não disponível (${resp.status})`);
  return resp.json();
}
