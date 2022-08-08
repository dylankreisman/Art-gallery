const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentary = document.querySelector('textarea[name="comment-text"]').value.trim()

    if (commentary) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                commentary
            }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace('/single-page');
        } else {
            alert(response.statusText)
        }
    }
}


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);


  