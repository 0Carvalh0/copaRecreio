async function fetchData() {
  const res = await fetch("./assets/json/teams.json");
  const teamsList = await res.json();

  function createTeams() {
    const listTeams = document.querySelector("#main__listTeams");
    teamsList.forEach((element) => {
      const teamStructure = `<button type="button" class="teamButton"><li class="teamButton"><img src="${element.teamLogo}" alt="Logo do time"><p>${element.teamName}</p></li></button>`;
      listTeams.innerHTML += teamStructure;
    });
  }

  createTeams();
}

fetchData();
