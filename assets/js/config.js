document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-lateral a");
    const pages = document.querySelectorAll(".page");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const pageId = this.getAttribute("data-page");

            // Se for "Sair", apenas redireciona e não faz mais nada
            if (pageId === "sair") {
                window.location.href = "index.html";
                return;
            }

            event.preventDefault(); // Impede o recarregamento da página

            // Remove 'active' de todos os links e páginas
            links.forEach(l => l.classList.remove("active"));
            pages.forEach(p => p.classList.remove("active"));

            // Ativa o botão clicado e exibe a página correspondente
            this.classList.add("active");

            const pageElement = document.getElementById(pageId);
            if (pageElement) {
                pageElement.classList.add("active");
            }
        });
    });
});
