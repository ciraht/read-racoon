document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-lateral a");
    const pages = document.querySelectorAll(".page");

    // Recupera a aba ativa do localStorage
    const activePage = localStorage.getItem("activePage") || "inicio"; // Define "inicio" como padrão
    activatePage(activePage);

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const pageId = this.getAttribute("data-page");

            if (pageId === "sair") {
                window.location.href = "index.html";
                return;
            }

            event.preventDefault(); // Impede o recarregamento da página

            // Salva a aba ativa no localStorage
            localStorage.setItem("activePage", pageId);

            // Ativa a nova aba
            activatePage(pageId);
        });
    });

    function activatePage(pageId) {
        // Remove 'active' de todos os links e páginas
        links.forEach(l => l.classList.remove("active"));
        pages.forEach(p => p.classList.remove("active"));

        // Ativa o link correspondente
        const activeLink = document.querySelector(`.nav-lateral a[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // Exibe a página correspondente
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add("active");
        }

        window.scrollTo(0, 0);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const securityTab = document.querySelector(".nav-lateral a[data-page='seguranca']");
    const modal = document.getElementById("password-modal");
    const closeModal = document.querySelector(".close");
    const confirmPasswordBtn = document.getElementById("confirm-password");

    securityTab.addEventListener("click", function (event) {
        event.preventDefault(); // Impede a troca imediata de página
        modal.style.display = "flex"; // Exibe o modal
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Esconde o modal
        activatePage("inicio"); // Leva para a página inicial
        localStorage.setItem("activePage", "inicio");
        window.location.href = "config.html"
    });

    confirmPasswordBtn.addEventListener("click", function () {
        const password = document.getElementById("current-password").value;
        
        if (password.trim() !== "") {
            modal.style.display = "none"; // Fecha o modal
            activatePage("seguranca"); // Agora sim, vai para a página de segurança
        } else {
            alert("Digite sua senha para continuar!");
        }
    });

    function activatePage(pageId) {
        // Remove a classe 'active' de todas as páginas
        document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));

        // Adiciona a classe 'active' na página desejada
        document.getElementById(pageId)?.classList.add("active");

        window.scrollTo(0, 0);
    }
});
