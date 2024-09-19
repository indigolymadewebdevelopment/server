    let btn = document.querySelector(".bot")
    let lists = document.querySelector(".lists")
    let dpen = document.querySelector(".dpen")
    let iccn = document.querySelector(".iccn")
    let aboutme = document.querySelector(".aboutme ")
    let aname = document.querySelectorAll(".aname ")
    let fas = document.querySelector(".fas ")
    let staggered2 = document.querySelector(".staggered2 ")


let skill2= document.getElementsByClassName("skill2")[0]
let sidebar= document.querySelector(".sidebar")
function slide (){
    console.log("hi")
    aboutme.classList.remove("aboutme2")
    aname.forEach(element=>{
        element.classList.remove("aname2")
    })

    btn.classList.add("bot2")
    iccn.classList.add("bot2")
    aboutme.classList.add("bot2")

    // ordercardo.forEach(element=> {
    //     element.classList.remove("ordercardswitch")
    // });
    lists.classList.add("lists2")
    dpen.classList.add("dpen2")


    skill2.classList.add("skill22")



}
function toggleabt(){
   

    aboutme.classList.toggle("aboutme2")
    aname.forEach(element=>{
        element.classList.toggle("aname2")
    })
   

}

function ifa(){
    aboutme.classList.remove("aboutme2")
    aname.forEach(element=>{
        element.classList.remove("aname2")
    })
    btn.classList.remove("bot2")
    iccn.classList.remove("bot2")
    aboutme.classList.remove("bot2")
    skill2.classList.remove("skill22")
    lists.classList.remove("lists2")
    dpen.classList.remove("dpen2")
    
}
let menu = document.querySelector(".menu ")
let logo = document.querySelector(".logo ")

let header = document.querySelector("header ")
let menuchd = document.querySelectorAll(".menuchd ")

let skill = document.querySelector(".skill ")

function hambger(){
menu.classList.toggle("menu22")
menuchd.forEach(element=> {
    element.classList.toggle("menuchd22")
})

header.classList.toggle("header22")
logo.classList.toggle("logo22")
skill.classList.toggle("skill22")
aboutme.classList.toggle("aboutme22")


}

// let box = document.querySelector(".box")
// function gd(){
//     console.log("okio")
// }

//  ordercardo.forEach(element=> {
//                     element.classList.remove("ordercardswitch")
//                 });