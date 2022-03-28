function sendMail(contactForm) {
    emailjs.send("service_gnez1ub", "portfolio-contact", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_request": contactForm.message.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false;
}

const myForm = document.getElementById("contactForm");
const messageSent = document.getElementById("submitSuccessMessage");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    messageSent.removeAttribute("class")
});