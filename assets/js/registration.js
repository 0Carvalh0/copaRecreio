// Dados de exemplo
const teams = [
  { id: 1, name: "Time A" },
  { id: 2, name: "Time B" },
  { id: 3, name: "Time C" },
];

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
populateTeams();
