// Dados de exemplo
let teams = [];

async function fetchData() {
  const response = await fetch("../json/teams.json");
  const data = await response.json();
  return data;
}

// Elementos do DOM
const form = document.getElementById("player-registration-form");
const teamSelect = document.getElementById("team");

// Preencher o select de times
function populateTeams() {
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team.id;
    option.textContent = team.name;
    teamSelect.appendChild(option);
  });
}

// Lidar com o envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const playerData = Object.fromEntries(formData.entries());

  // Aqui você normalmente enviaria os dados para um servidor
  console.log("Dados do jogador:", playerData);

  // Limpar o formulário após o envio
  form.reset();
  alert("Jogador inscrito com sucesso!");
});

// Inicializar a página
async function initializePage() {
  teams = await fetchData();
  populateTeams();
}

initializePage();
