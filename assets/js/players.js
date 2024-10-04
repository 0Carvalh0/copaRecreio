// Dados de exemplo
const players = [
  {
    id: 1,
    teamId: 1,
    name: "Jogador 1",
    number: 10,
    age: 25,
    country: "Brasil",
    photo: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    teamId: 1,
    name: "Jogador 2",
    number: 7,
    age: 28,
    country: "Argentina",
    photo: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    teamId: 2,
    name: "Jogador 3",
    number: 9,
    age: 22,
    country: "Portugal",
    photo: "https://via.placeholder.com/60",
  },
  {
    id: 4,
    teamId: 3,
    name: "Jogador 4",
    number: 11,
    age: 26,
    country: "Espanha",
    photo: "https://via.placeholder.com/60",
  },
];

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
                <p class="player-card__detail">Número: ${player.number}</p>
                <p class="player-card__detail">Idade: ${player.age}</p>
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
renderPlayers();
