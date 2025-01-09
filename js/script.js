function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_5aghzaj", "template_axudcfj", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
        })
        .catch(function(error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send email. Please try again.");
        });
}
