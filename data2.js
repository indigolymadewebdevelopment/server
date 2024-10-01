/* <form name="submit-to-google-sheet">
<input name="email" type="email" placeholder="Email" required>
<button type="submit">Send</button>
</form> */


const scriptURL = 'https://script.google.com/macros/s/AKfycbwi3weCbHjgxO7M0hiGeEuBAJ77gdKclncjGD1P3zo3BASHrCUadEkCr3b5nh9E5oNj/exec'
const form = document.forms['submittogooglesheet']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Sent successfully. We appreciate your interest; however, we are no longer accepting applications. However, we will retain your information for future consideration.Thank you "))
.then(form.reset())

.catch(error => console.error('Error!', error.message))
})
