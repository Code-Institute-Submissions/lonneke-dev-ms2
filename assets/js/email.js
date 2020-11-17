function sendMail(contactForm) {
    emailjs.send("service_gyau47p","lonneke", {
        "from_name" : contactForm.name.value,
        "from_email" : contactForm.emailaddress.value,
        "message" : contactForm.message.value
    }) 
    .then(
        function(response) {
            console.log("SUCCES", response);
            emailSend();
        },
        function(error) {
            console.log("FAILED", error);
            emailError();
        }
    );
    return false;
}

const emailBox = document.querySelector(".email-box");
const formBox = document.querySelector(".form-box");
const errorBox = document.querySelector(".error-box");

function emailSend() {
    emailBox.classList.remove("hide");

    formBox.classList.add("hide");
}

function emailError() {
    errorBox.classList.remove("hide");

    formBox.classList.add("hide");
}

function GoBackToForm() {
    formBox.classList.remove("hide");

    errorBox.classList.add("hide");
}