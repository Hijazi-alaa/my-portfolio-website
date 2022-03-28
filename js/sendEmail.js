function sendMail(contactForm) {
    emailjs.send("service_gnez1ub", "portfolio-contact", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_request": contactForm.message.value
        })
        .then(
            function(response) {
                alert("SUCCESS", response);
            },
            function(error) {
                alert("FAILED", error);
            }
        );
    return false;
}