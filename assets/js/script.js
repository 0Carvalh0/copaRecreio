// Dados de exemplo
const teams = [
  { id: 1, name: "Time A" },
  { id: 2, name: "Time B" },
  { id: 3, name: "Time C" },
];

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
            <a href="players.html?team=${team.id}" class="team-card__button">Ver Jogadores</a>
        `;
    teamsList.appendChild(teamCard);
  });
}

// Inicializar a página
renderTeams();
