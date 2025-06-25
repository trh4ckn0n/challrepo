<script>
  const beaconUrl = atob("aHR0cHM6Ly9jaGFsbHJlcG9kLm9ucmVuZGVyLmNvbS9waW5n");
  fetch(beaconUrl, {
    method: "POST",
    body: JSON.stringify({ user: "anonymous", time: Date.now() }),
    headers: { "Content-Type": "application/json" }
  }).then(() => {
    document.getElementById("status").textContent = "✅ Connexion établie.";
  });
</script>
<div id="status" style="color:lime;font-family:monospace;">⏳ En attente…</div>
