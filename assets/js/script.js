let lastScroll = 0;
const header = document.querySelector("header");
const scrollThreshold = 10; // Quantidade mínima para detectar rolagem

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll + scrollThreshold) {
        // Rolando para baixo: esconde o cabeçalho
        header.style.top = "-100px"; // Esconde suavemente
    } else if (currentScroll < lastScroll - scrollThreshold) {
        // Rolando para cima: mostra o cabeçalho
        header.style.top = "0";
    }

    lastScroll = currentScroll;
});

