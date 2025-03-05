let index = 0;
function moverCarrossel(direcao) {
    const carrossel = document.querySelector(".carousel");
    const itens = document.querySelectorAll(".flip-card");
    const total = itens.length;
    const itemWidth = itens[0].offsetWidth + 20; // Considera o gap de 20px

    index += direcao;
    if (index < 0) {
        index = total - 1;
    } else if (index >= total) {
        index = 0;
    }

    carrossel.style.transform = `translateX(-${index * itemWidth}px)`;
}
