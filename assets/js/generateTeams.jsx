async function fetchData() {
  const res = await fetch("./assets/json/teams.json");
  const teamsList = await res.json();

  function createTeams() {
    const listTeams = document.querySelector("#main__listTeams");
    teamsList.forEach((element) => {
      const teamStructure = `<a href="./jogadores.html"><li><img src="${element.teamLogo}" alt="Logo do time"><p>${element.teamName}</p></li></a>`;
      listTeams.innerHTML += teamStructure;
    });
  }

  createTeams();
}

fetchData();
