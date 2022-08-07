const signupFormHandler = async (event) => {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-signup')
    const emailEl = document.querySelector('#password-signup')
    const passwordEl = document.querySelector('#password-signup')

    if (usernameEl && emailEl && passwordEl) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ 
                username: usernameEl, 
                email: emailEl, 
                password: passwordEl.value
            }),
            headers: {'Content-Type': 'application/json'}
        
        });

        if (response.ok) {
            document.location.replace('/homepage')
        } else {
            alert(response.statusText)
        }
        
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);