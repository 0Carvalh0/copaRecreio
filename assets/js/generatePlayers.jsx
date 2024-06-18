async function fetchData() {
  const res = await fetch("./assets/json/playersCorinthians.json");
  const playersList = await res.json();

  function createPlayers() {
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

  createPlayers();
}

fetchData();
