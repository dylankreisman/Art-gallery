 const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentaryEl = document.querySelector('.form-input')
    const user_idEl = 4;
    const image_idEl = 3;
    console.log(commentaryEl);

        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                commentary: commentaryEl.value,
                user_id: user_idEl,
                image_id: image_idEl
            }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace("/");

        } else {
            alert('failed to comment')
        }
}


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);