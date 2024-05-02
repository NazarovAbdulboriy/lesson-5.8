// const element = document.getElementById("test");
// const element3 = document.getElementById("text")
// const element2 = document.getElementById("test2");



// // element.addEventListener("click", function name() {
// //     element3.style.color = "white";
// //     element3.style.background = "blue";
    
// // })





// // element2.addEventListener("click", function name() {
// //     element3.style.color = "yellow";
// //     element3.style.background = "red";
// // })


// let copyFunction = () => {
//     let newText = document.createElement("h1")
//     let copyText = name.textContent
//     newText.innerText = copyText
//     body.appendChild(newText)
//     console.log(copyText);
// }


// btn1.addEventListener("click", color1)
// btn2.addEventListener("click", color2)
// copy.addEventListener("click", copyFunction)

let count = 0;
const counter = document.getElementById('count');

function increase() {
  count++;
  counter.textContent = count;
}

function decrease() {
  count--;
  counter.textContent = count;
}

text.style.background = "green"