// Wedding countdown: local time in Hyderabad (IST, UTC+05:30).
const weddingDate = new Date("2026-11-22T09:31:00+05:30").getTime();
function updateCountdown() {
  const remaining = weddingDate - Date.now();
  const values = remaining <= 0
    ? [0, 0, 0, 0]
    : [Math.floor(remaining / 86400000),
       Math.floor((remaining % 86400000) / 3600000),
       Math.floor((remaining % 3600000) / 60000),
       Math.floor((remaining % 60000) / 1000)];
  ["days", "hours", "minutes", "seconds"].forEach((id, i) => {
    document.getElementById(id).textContent = String(values[i]).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
