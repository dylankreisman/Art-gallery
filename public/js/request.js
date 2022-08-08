const requestFormHandler = async (event) => {
    event.preventDefault();

    const categoryEl = document.querySelector('#request-category')
    const descriptionEl = document.querySelector('#request-description')
    const priceEl = document.querySelector('#request-price')
    const usernameEl = document.querySelector('#request-username')

    if (categoryEl && descriptionEl && priceEl && usernameEl) {
        const response = await fetch('/api/requests', {
            method: 'POST',
            body: JSON.stringify({ 
                category_id: categoryEl.value, 
                description: descriptionEl.value, 
                price: priceEl.value,
                username: usernameEl.value
             }),
            headers: {'Content-Type': 'application/json'}
        
        });

        if (response.ok) {
            document.location.replace('/requests')
        } else {
            alert('Submission Failed!')
        }
        
    }
};


document
  .querySelector('.request-form')
  .addEventListener('submit', requestFormHandler);