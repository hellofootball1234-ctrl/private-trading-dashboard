let startBalance = 10000;
let currentBalance = 10000;
let target = 200000;

function updateUI() {
  document.getElementById("currentBal").innerText = currentBalance;

  let progress = (currentBalance / target) * 100;
  document.getElementById("progressBar").style.width = progress + "%";

  document.getElementById("weeklyProfit").innerText = 10000 * 5;
}

function addTrade() {
  let pl = Number(document.getElementById("pl").value);
  currentBalance += pl;
  updateUI();
}

updateUI();
