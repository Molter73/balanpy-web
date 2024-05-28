function getApiProtocol() {
  const isSecure = process.env.BALANPY_USE_HTTPS || "false"
  return `http${isSecure === "true" ? "s" : ""}`
}

function getDomain() {
  return process.env.BALANPY_DOMAIN || "localhost"
}

function getPort() {
  return process.env.BALANPY_PORT || "8080"
}

export function getApiUrl() {
  return `${getApiProtocol()}://${getDomain()}:${getPort()}`
}
