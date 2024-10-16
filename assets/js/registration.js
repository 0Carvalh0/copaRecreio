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
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        alert("Formulário enviado com sucesso!");
      } else {
        console.log(response);
        alert(json.message);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Alguma coisa deu errado!");
    })
    .then(function () {
      form.reset();
    });
});

// Inicializar a página
async function initializePage() {
  teams = await fetchData();
  populateTeams();
}

initializePage();
