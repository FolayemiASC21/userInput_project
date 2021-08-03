let usernameInput = document.querySelector("#username")
let passwordInput = document.querySelector("#password")
let submitButton = document.querySelector("#submit-button")

let success = document.querySelector("#success")
let error = document.querySelector("#error")

let body = document.querySelector("body")

let username;
let password;

submitButton.onclick = function(event) {
    event.preventDefault()


    username = usernameInput.value
    password = passwordInput.value

    if (username == "Baby Yoda" && password == "Squirtle") {
        success.style.display = "block"
        error.style.display = "none"
        body.style.backgroundColor = "lightblue"
    }
    else if (username != "Baby Yoda" && password != "Squirtle" && username != "" && password != null) {
        error.style.display = "block"
        success.style.display = "none"
        body.style.backgroundColor = "rgb(50, 50, 50)"
    }
    else if (username == "" && password == null) {
        error.style.display = "none"
        success.style.display = "none"
    }
    else {
        error.style.display = "block"
        success.style.display = "none"
        body.style.backgroundColor = "rgb(50, 50, 50)"
    }

    usernameInput.value = ""
    passwordInput.value = null
}
