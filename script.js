// ================================
// Bright Future Academy
// script.js
// ================================

// HOME PAGE REGISTRATION

function registerStudent() {

    let name = document.getElementById("studentName").value.trim();
    let email = document.getElementById("studentEmail").value.trim();
    let phone = document.getElementById("studentPhone").value.trim();
    let course = document.getElementById("studentCourse").value;
    let address = document.getElementById("studentAddress").value.trim();

    let result = document.getElementById("result");

    if (name == "" || email == "" || phone == "" || course == "" || address == "") {

        result.innerHTML = "❌ Please fill all the fields.";
        result.style.color = "red";
        result.style.background = "#ffe6e6";
        result.style.border = "2px solid red";
        result.style.padding = "20px";

        return false;
    }

    result.innerHTML =
        "<h2>🎉 Registration Successful!</h2>" +
        "<br><b>Name:</b> " + name +
        "<br><b>Email:</b> " + email +
        "<br><b>Phone:</b> " + phone +
        "<br><b>Course:</b> " + course +
        "<br><b>Address:</b> " + address +
        "<br><br>Thank you for registering at <b>Bright Future Academy.</b>";

    result.style.color = "green";
    result.style.background = "#e8f5e9";
    result.style.border = "2px solid green";
    result.style.padding = "20px";

    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentCourse").selectedIndex = 0;
    document.getElementById("studentAddress").value = "";

    return false;
}


// ================================
// CHAT SUPPORT
// ================================

function sendMessage() {

    let input = document.getElementById("message");
    let chat = document.getElementById("chatBody");

    if (input.value.trim() == "") {
        return;
    }

    let message = input.value;

    chat.innerHTML += "<p><strong>You:</strong> " + message + "</p>";

    let reply = "";

    let msg = message.toLowerCase();

    if (msg.includes("course")) {
        reply = "We offer HTML & CSS, JavaScript, Python Programming and Data Analytics courses.";
    }
    else if (msg.includes("fee")) {
        reply = "Course fees start from ₹6,000.";
    }
    else if (msg.includes("admission")) {
        reply = "Admissions are open for 2026. Please register using the form on the Home page.";
    }
    else if (msg.includes("phone")) {
        reply = "Our contact number is +91 9876543210.";
    }
    else if (msg.includes("email")) {
        reply = "Our email address is info@brightfutureacademy.com.";
    }
    else if (msg.includes("location")) {
        reply = "Bright Future Academy is located in Hyderabad, Telangana.";
    }
    else if (msg.includes("timing")) {
        reply = "Our office hours are Monday to Saturday, 9:00 AM to 6:00 PM.";
    }
    else if (msg.includes("hello") || msg.includes("hi")) {
        reply = "Hello! Welcome to Bright Future Academy. How can I help you?";
    }
    else {
        reply = "Thank you for your message. Our team will contact you soon.";
    }

    chat.innerHTML += "<p><strong>Academy:</strong> " + reply + "</p>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
