async function fetchData() {
  const res = await fetch("./assets/json/teams.json");
  const teamsList = await res.json();
  const teamNameTitle = document.querySelector("#teamNameTitle").innerHTML;

  teamsList.forEach((element) => {
    if (element.teamName == teamNameTitle) {
      createPlayers(element.players);
    }
  });

  function createPlayers(playersList) {
    const listPlayers = document.querySelector("#main__listPlayers");
    playersList.forEach((element) => {
      const playerStructure = `<li>
          <div class="left">
            <img src="${element.picture}" alt="Foto do jogador" />
            <div>
              <p>${element.name}</p>
              <span>
                <span>${element.shirtNumber}</span><span>${element.age} anos</span
                ><span
                  ><img
                    src="./assets/images/brasil.png"
                    alt="Bandeira do Brasil"
                  />${element.country}</span
                >
              </span>
            </div>
          </div>
          <i class="fa-regular fa-bell"></i>
        </li>`;

      listPlayers.innerHTML += playerStructure;
    });
  }
}

fetchData();
