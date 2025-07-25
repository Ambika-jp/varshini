function startDownload() {
  const link = document.getElementById("instaLink").value;
  const type = document.getElementById("downloadType").value;
  const res = document.getElementById("resolution").value;
  const result = document.getElementById("result");

  if (!link.includes("instagram.com")) {
    result.innerHTML = "⚠️ Please enter a valid Instagram link.";
    return;
  }

  result.innerHTML = `
    🤖 AI Processing...
    <br>🔗 Link: ${link}
    <br>📂 Type: ${type}
    <br>🖥️ Resolution: ${res}
    <br>✅ Download ready (Simulation only)
  `;

  // Simulated download process
  setTimeout(() => {
    result.innerHTML += `<br><button onclick="alert('📁 File downloaded')">Click to Download</button>`;
  }, 2000);
}
