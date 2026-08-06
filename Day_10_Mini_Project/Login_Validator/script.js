const button = document.getElementById("loginBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    validateLogin(username, password);

});

function validateLogin(username, password) {

    let cleanUsername = username.trim().toLowerCase();
    let cleanPassword = password.trim();

    let checkUsername = cleanUsername.length >= 4;
    let checkPassword = cleanPassword.length >= 6;

    if(checkUsername){

        if(checkPassword){

            message.textContent = `Welcome ${cleanUsername}!`;
            message.style.color = "green";

        }else{

            message.textContent = "Password too short";
            message.style.color = "red";
        }

    }else{

        message.textContent = "Username too short";
        message.style.color = "red";
    }

}