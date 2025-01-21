const btn= document.getElementById("save-btn");
const btnRemove = document.getElementById("resetBtn");
const div = document.getElementById("addName");


btn.addEventListener("click", function(e){
    e.preventDefault()

let newName = document.getElementById("name-input");

let nameValue = newName.value;

localStorage.setItem("name", nameValue);
console.log(typeof localStorage.getItem("name"));

const nameFromLocalStorage = localStorage.getItem("name");

console.log(nameFromLocalStorage);


btnRemove.addEventListener("click", function(){
    localStorage.removeItem("name");
})

const newH2=document.createElement("h2");

newH2.classList.add("text-primary");
newH2.innerHTML= `ciao : ${nameFromLocalStorage}`

div.appendChild(newH2);

})


// timer

// localStorage.setItem("time", timerValue);

// console.log(typeof localStorage.getItem("time"));

// let numFromLocalStorage=parseInt(localStorage.getItem("time"));

// console.log(numFromLocalStorage);




document.addEventListener("DOMContentLoaded", () => {


    let timer= document.getElementById("timer");
    let initialNum = parseInt(localStorage.getItem("time")) || 1;
     timer.innerHTML = initialNum;

// let timerValue=initialNum;
// console.log(timerValue);
// localStorage.setItem("time", timerValue);

// console.log(typeof localStorage.getItem("time"));

// let numFromLocalStorage=parseInt(localStorage.getItem("time"));

// console.log(numFromLocalStorage);


function avvioTimer(){
    setInterval(()=> {
        initialNum = initialNum+1;
        console.log("è passato un secondo")
        timer.innerHTML=initialNum;
        localStorage.setItem("time", initialNum);
        console.log("nuovo valore :", initialNum);
    }, 1000);
}
avvioTimer();

})

window.addEventListener("beforeunload", () => {
  
  localStorage.removeItem("time");
});