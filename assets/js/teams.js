// Dados de exemplo
let teams = [];

async function fetchData() {
  const response = await fetch("./assets/json/teams.json");
  const data = await response.json();
  return data;
}

// Elementos do DOM
const teamsList = document.getElementById("teams-list");

// Renderizar lista de times
function renderTeams() {
  teamsList.innerHTML = "";
  teams.forEach((team) => {
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    teamCard.innerHTML = `
            <h2 class="team-card__name">${team.name}</h2>
            <a href="./assets/pages/players.html?team=${team.id}" class="team-card__button">Ver Jogadores</a>
        `;
    teamsList.appendChild(teamCard);
  });
}

// Inicializar a página
async function initializePage() {
  teams = await fetchData();
  renderTeams();
}

initializePage();
