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
