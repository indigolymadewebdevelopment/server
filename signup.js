function unavail(num){
    switch(num){
        case 1:
            unavailable.classList.add("unavailableswitch")
            parag.forEach(element=> {
                element.classList.add("animat")
            });break;
case 2:
    unavailable.classList.remove("unavailableswitch")
    parag.forEach(element=> {
        element.classList.remove("animat")
    });break;
    }
}







const scriptURL = 'https://script.google.com/macros/s/AKfycbwqe-Cf5tepF-89H0a0kOWD8ij2ghdY2IgCQd9C7omx2KDnfRxM2__vZqyQXcl0Oe_zZw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {console.log('Success!', response);
form.reset();
})
.catch(error => console.error('Error!', error.message))
})










let clk4 = document.querySelector(".clk4")
        let clk5 = document.querySelector(".clk5")

let bitn= document.querySelector(".bitn")

let clk= document.querySelector(".clk")


function show(){
clk.classList.add("clk2");



}
function one(num){
    switch(num){
        case 1: clk.classList.remove("clk2");
        break;
        case 2: 
        form.reset();


    }
}