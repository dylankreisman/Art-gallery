const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const uploadFormHandler = async (event) => {
    event.preventDefault();

    const imageNameEl = document.querySelector('#image-name')
    const imageDescriptionEl = document.querySelector('#image-description')
    const imageCategoryEl = document.querySelector('#image-category')
    const imageUserEl = document.querySelector('#image-user')
    const uploadEl = document.querySelector('#upload')
    const uploadinfo = uploadEl.value


        const response = await fetch('/api/images', {
            method: 'POST',
            body: JSON.stringify({ 
                image_name: imageNameEl.value, 
                description: imageDescriptionEl.value, 
                category_id: imageCategoryEl.value,
                user_id: imageUserEl.value,
                hosted_url: uploadinfo.value
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