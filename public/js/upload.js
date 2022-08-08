const uploadFormHandler = async (event) => {
    event.preventDefault();

    const imageNameEl = document.querySelector('#image-name')
    const imageDescriptionEl = document.querySelector('#image-description')
    const imageCategoryEl = document.querySelector('#image-category')
    const uploadEl = document.querySelector('#image-url')


        const response = await fetch('/api/images', {
            method: 'POST',
            body: JSON.stringify({ 
                image_name: imageNameEl.value, 
                description: imageDescriptionEl.value, 
                category_id: imageCategoryEl.value,
                hosted_url: uploadEl.value
            }),
            headers: {'Content-Type': 'application/json'}
        
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
        

};

document
  .querySelector('.upload-form')
  .addEventListener('submit', uploadFormHandler);