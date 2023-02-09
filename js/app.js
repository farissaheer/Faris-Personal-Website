(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})()

const form = document.getElementById('form-input');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.getElementById("submit");

// Username Validation Code

function isUsernameValid(){
  let usernamevalue = username.value.trim();
  let valid=false;
  if(usernamevalue === "") {
    setErrorFor(username, "Username cannot be blank")
  }else if(/\d/.test(usernamevalue)){
    setErrorFor(username, "Username cannot contain number")
  }else {
    var str = username.value;
    var splitStr = str.toLowerCase().split(' ');
    for(var i = 0; i < splitStr.length; i++){
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    str = splitStr.join(' ');
    username.value = str;
    setSuccessFor(username);
    submitEnable()
    valid=true;
  }
  return valid;
}

// Email Validation Code

function isEmailValid(){
  let emailvalue = email.value.trim();
  let valid=false;
  if(emailvalue === "") {
    setErrorFor(email, "Email cannot be blank")
  }else if(!isEmail(emailvalue)){
    setErrorFor(email, "Email is not valid")
  }else {
    setSuccessFor(email);
    submitEnable()
    valid=true;
  }
  return valid;
}

// Message Validation Code

function isMessageValid(){
  let messagevalue = message.value.trim();
  let valid=false;
  if(messagevalue === "") {
    setErrorFor(message, "Message cannot be blank")
  }else {
    setSuccessFor(message);
    submitEnable()
    valid=true;
  }
  return valid;
}

// Set Error Code

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerHTML = message;

  formControl.className = "input-control error"
}

// Set Success Code

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "input-control"
}

// Email Format Checking Code

function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Submit Button Enable

function submitEnable() {
  submitButton.style.backgroundColor = "var(--color-primary)";
  submitButton.disabled = false
}

// Form Validation Code

function validate() {

  var namefncall = isUsernameValid()
  var emailfncall = isEmailValid()
  var messagefncall = isMessageValid()
  
  if(!namefncall || !emailfncall || !messagefncall){
    submitButton.disabled = true
    submitButton.style.backgroundColor = "gray";
    alert("Enter your details")
  }else{
    submitEnable()
  }
}