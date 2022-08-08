const requestFormHandler = async (event) => {
    event.preventDefault();

    const categoryEl = document.querySelector('#request-category')
    const descriptionEl = document.querySelector('#request-description')
    const priceEl = document.querySelector('#request-price')

    if (categoryEl && descriptionEl && priceEl) {
        const response = await fetch('/api/requests', {
            method: 'POST',
            body: JSON.stringify({ 
                category: categoryEl.value, 
                description: descriptionEl.value, 
                price: priceEl.value
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