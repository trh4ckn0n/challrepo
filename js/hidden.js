const beaconUrl = atob("aHR0cHM6Ly9jaGFsbHJlcG9kLm9ucmVuZGVyLmNvbS9waW5n");

fetch(beaconUrl, {
  method: "POST",
  body: JSON.stringify({ user: "anonymous", time: Date.now() }),
  headers: { "Content-Type": "application/json" }
})
.then(() => {
  document.getElementById("status").textContent = "✅ Connexion établie.";
  setTimeout(() => {
    window.location.href = "/redir"; // tu peux changer la cible
  }, 2000); // redirection après 2 secondes
})
.catch(() => {
  document.getElementById("status").textContent = "❌ Échec de connexion.";
});
