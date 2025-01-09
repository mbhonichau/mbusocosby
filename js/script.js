function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementsById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_5aghzaj", "template_axudcfj", parms).then(alert("Email Sent!!"))
}