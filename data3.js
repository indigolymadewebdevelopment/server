const scriptUR = 'https://script.google.com/macros/s/AKfycbzAOPxUpF02NBxGnsL8iUTx2Mwp5qdAMW4wPNn60kbnwDM6bTSA9HBRgrjHkx9K8Xu8Rg/exec'
const form3 = document.forms['submit-to-google-sheet']
form3.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptUR, { method: 'POST', body: new FormData(form3)})
.then(response => alert("Sent successfully"))
.then(form3.reset())
.catch(error => console.error('Error!', error.message))
})
