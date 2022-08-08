async function commentFormHandler(event) {
    event.preventDefault();

    const commentaryEl = document.querySelector('input[name="comment-text"]').value.trim();
    
    const image_idEl = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (commentaryEl && image_idEl) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                image_id: image_idEl.value,
                commentary: commentaryEl.value
            }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace("/");
;
        } else {
            alert('failed to comment')
        }
    }
}


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);


  