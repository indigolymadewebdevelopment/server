const scriptURL = 'https://script.google.com/macros/s/AKfycby6eAxKt6SGA3Mf3tZZ8AbdgXlsQxGL9infG1vge7TaskAvflNq6VT5wXu1lqOHWC9k/exec'
const form0 = document.forms['submit-code-class']

form0.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form0)})
.then(response => alert("Submission Successful! Please check your email for subsequent communications and instructions."))
.then(form0.reset())
.catch(error => console.error('Error!', error.message))
})