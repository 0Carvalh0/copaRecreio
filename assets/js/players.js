// Dados de exemplo
let players = [];

async function fetchData() {
  const response = await fetch("../json/players.json");
  const data = await response.json();
  return data;
}

// Elementos do DOM
const playersList = document.getElementById("players-list");

// Obter o ID do time da URL
const urlParams = new URLSearchParams(window.location.search);
const teamId = parseInt(urlParams.get("team"));

// Renderizar lista de jogadores
function renderPlayers() {
  playersList.innerHTML = "";
  const teamPlayers = teamId
    ? players.filter((p) => p.teamId === teamId)
    : players;
  teamPlayers.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    playerCard.innerHTML = `
            <img src="${player.photo}" alt="${player.name}" class="player-card__image">
            <div class="player-card__info">
                <h3 class="player-card__name">${player.name}</h3>
                <p class="player-card__detail">País: ${player.country}</p>
            </div>
            <button class="player-card__notification" onclick="toggleNotification(this)">
                <i class="bi bi-bell"></i>
            </button>
        `;
    playersList.appendChild(playerCard);
  });
}

// Alternar notificação
function toggleNotification(button) {
  button.classList.toggle("player-card__notification--active");
  const icon = button.querySelector("i");
  icon.classList.toggle("bi-bell");
  icon.classList.toggle("bi-bell-fill");
}

// Inicializar a página
async function initializePage() {
  players = await fetchData();
  renderPlayers();
}

initializePage();
