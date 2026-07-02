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

let result = document.getElementById("result");

if(name=="" || email=="" || phone=="" || course==""){

result.innerHTML="❌ Please fill all the fields.";
result.style.color="red";
result.style.background="#ffe6e6";

return false;

}

result.innerHTML=
"<h2>🎉 Registration Successful!</h2>" +
"<br><b>Name:</b> "+name+
"<br><b>Email:</b> "+email+
"<br><b>Phone:</b> "+phone+
"<br><b>Course:</b> "+course+
"<br><br>Thank you for registering at <b>Bright Future Academy.</b>";

result.style.color="green";
result.style.background="#e8f5e9";
result.style.border="2px solid green";
result.style.padding="20px";

document.getElementById("studentName").value="";
document.getElementById("studentEmail").value="";
document.getElementById("studentPhone").value="";
document.getElementById("studentCourse").selectedIndex=0;

return false;

}



