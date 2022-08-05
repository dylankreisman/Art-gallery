const loginFormHandler = async (event) => {
    event.preventDefault();

const email = document.querySelector("#username-login")
const password = document.querySelector("#password-login")

if (email && password) {

    const response = await fetch('/api/users')
}

}