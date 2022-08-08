
const emailEl = document.querySelector("#login-email")
const passwordEl = document.querySelector("#login-password")

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

 if (email && password) {

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json'},
    })
    

    if(response.ok) {
        alert("You've logged in")
        document.location.replace('/');
    } else {
        alert(response.statusText)
    // }
}
}
}
document.querySelector('#login-btn').addEventListener('click', loginFormHandler);