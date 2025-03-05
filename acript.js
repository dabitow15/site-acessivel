/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const albums = document.querySelectorAll(".album");

    albums.forEach(album => {
        album.addEventListener("mouseover", () => {
            album.style.backgroundColor = "#34495e";
            album.style.color = "white";
            album.style.transition = "0.3s";
        });
        album.addEventListener("mouseout", () => {
            album.style.backgroundColor = "#fff";
            album.style.color = "#333";
        });
    });

    // Adiciona um efeito de rolagem suave ao clicar nos links do menu
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
