document.addEventListener("DOMContentLoaded", function () {
    // Efeito de rolagem suave ao clicar nos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animação nos cartões de álbuns ao passar o mouse
    document.querySelectorAll(".album").forEach(album => {
        album.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
        });
        album.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.1)";
        });
    });

    // Alternar entre as abas
    const tabs = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll(".tab-section");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            
            sections.forEach(section => {
                section.style.display = "none";
            });
            
            document.getElementById(target).style.display = "block";
            
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Exibir a primeira aba ao carregar
    if (tabs.length > 0) {
        tabs[0].click();
    }
});
