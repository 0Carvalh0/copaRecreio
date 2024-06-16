document.addEventListener("click", (e) => {
    const targetEl = e.target
    
    if (targetEl.classList.contains("fa-bell")) {
      targetEl.classList.toggle("fa-solid");
      targetEl.classList.toggle("fa-regular");
    }
})