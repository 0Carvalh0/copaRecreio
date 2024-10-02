document.addEventListener("click", (e) => {
  const targetEl = e.target;

  if (targetEl.classList.contains("teamButton")) {
    const teamName = targetEl.querySelector("p").innerText;
    const teamLogo = targetEl.querySelector(".logoTime").getAttribute("src");
    localStorage.setItem("teamName", teamName);
    localStorage.setItem("teamLogo", teamLogo);
    window.location.replace("./players.html");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const teamNameTitle = document.querySelector("#teamNameTitle");
  teamNameTitle.innerHTML = localStorage.getItem("teamName");

  const logoTimeTitle = document.querySelector("#logoTimeTitle");
  logoTimeTitle.setAttribute("src", localStorage.getItem("teamLogo"));
});
