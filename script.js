document.addEventListener("DOMContentLoaded", function() {
    console.log("Site do Chico Buarque carregado com sucesso!");

    // Exemplo de interação simples: Mudar cor do título ao passar o mouse
    const titulo = document.querySelector("h1");
    titulo.addEventListener("mouseover", function() {
        titulo.style.color = "#ffffff";
    });
    titulo.addEventListener("mouseout", function() {
        titulo.style.color = "#2e7a89";
    });
});