document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    document.body.appendChild(carousel);

    for (let i = 1; i <= 73; i++) {
        const img = document.createElement("img");
        img.src = `images/foto${i}.jpg`;
        img.alt = `Foto ${i}`;
        carousel.appendChild(img);
    }

    let index = 0;
    function moveCarousel() {
        index++;
        if (index >= 73) {
            index = 0;
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveCarousel, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("feedback");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            feedback.textContent = "Por favor, preencha todos os campos.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Mensagem enviada com sucesso!";
            feedback.style.color = "green";
            form.reset();
        }
    });
});


