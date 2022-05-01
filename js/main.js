let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
  menu.classList.toggle("move");
};

//Email Js
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_f251pss", "template_wd9ae39", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No....",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}
