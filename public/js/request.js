const requestFormHandler = async (event) => {
    event.preventDefault();

    const category = document.querySelector('#request-category')
    const description = document.querySelector('#request-description')
    const price = document.querySelector('#request-price')

    if (category && description && price) {
        const response = await fetch('/api/requests', {
            method: 'POST',
            body: JSON.stringify({ category, description, price }),
            headers: {'Content-Type': 'application/json'}
        
        });

        if (response.ok) {
            document.location.replace('/homepage')
        } else {
            alert('Submission Failed!')
        }
        
    }
};


document
  .querySelector('.request-form')
  .addEventListener('submit', requestFormHandler);