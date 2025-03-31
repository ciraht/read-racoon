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

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-lateral a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Se o link for "Sair", permite a navegação normalmente
            if (this.dataset.page === "sair") return;

            event.preventDefault(); // Impede a navegação para as outras abas

            // Remove a classe 'active' de todos os links
            links.forEach(l => l.classList.remove("active"));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add("active");
        });
    });
});
