function sendMail(contactForm) {
    emailjs.send("service_gyau47p","lonneke", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
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

// Shows that the email has been send
function emailSend() {
    emailBox.classList.remove("hide");

    formBox.classList.add("hide");
}

// Shows that an error occurred
function emailError() {
    errorBox.classList.remove("hide");

    formBox.classList.add("hide");
}

// Goes back to the contact form
function GoBackToForm() {
    formBox.classList.remove("hide");

    errorBox.classList.add("hide");
}