let currentIndex = 0;

function moverCarrossel(direcao) {
    const carrossel = document.querySelector(".carousel");
    const totalCards = document.querySelectorAll(".flip-card").length;
    const cardWidth = document.querySelector(".flip-card").offsetWidth + 20; // Largura do card + espaçamento

    currentIndex += direcao;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    carrossel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}
