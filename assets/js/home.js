document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav__link");
  const contentTitle = document.querySelector(".content__title");
  const contentDescription = document.querySelector(".content__description");
  const contentCTA = document.querySelector(".content__cta");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;
      updateContent(page);
    });
  });

  function updateContent(page) {
    switch (page) {
      case "times":
        contentTitle.textContent = "Times";
        contentDescription.textContent =
          "Conheça as equipes que estão formando os craques do amanhã.";
        contentCTA.textContent = "Ver Times";
        break;
      case "jogadores":
        contentTitle.textContent = "Jogadores";
        contentDescription.textContent =
          "Descubra os jovens talentos que estão brilhando nos campos.";
        contentCTA.textContent = "Conhecer Jogadores";
        break;
      case "inscricao":
        contentTitle.textContent = "Inscrição";
        contentDescription.textContent =
          "Faça parte da nossa comunidade e comece sua jornada no futebol.";
        contentCTA.textContent = "Inscreva-se";
        break;
      default:
        contentTitle.textContent = "Bem-vindo ao Futebol Jovem";
        contentDescription.textContent = "Descubra o talento, viva a paixão!";
        contentCTA.textContent = "Comece Agora";
    }
  }
});
