 const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentaryEl = document.querySelector('.form-input')
    const image_idEl = document.querySelector('#imgid')
    console.log(commentaryEl);

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                commentary: commentaryEl.value,
                image_id: image_idEl.value
            }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace("/images/"+image_idEl.value);

        } else {
            alert('failed to comment')
        }
}


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);