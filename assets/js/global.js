document.addEventListener("click", (e) => {
  const targetEl = e.target;

  if (targetEl.classList.contains("teamButton")) {
    const teamName = targetEl.querySelector("p").innerText;
    localStorage.setItem("teamName", teamName);
    window.location.replace("./jogadores.html");
  }
});
