function sendMail(contactForm) {
    emailjs.send("service_gyau47p","lonneke", {
        "from_name" : contactForm.name.value,
        "from_email" : contactForm.emailaddress.value,
        "contact" : contactForm.contactinfo.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}