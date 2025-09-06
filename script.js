// ===== FORMULAIRE DE CONTACT =====
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "⚠️ Veuillez remplir tous les champs.";
        formMessage.className = "form-message error";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.textContent = "⚠️ Entrez une adresse email valide.";
        formMessage.className = "form-message error";
        return;
    }

    formMessage.textContent = "✅ Merci " + name + "! Votre message a bien été envoyé.";
    formMessage.className = "form-message success";

    form.reset();
});
