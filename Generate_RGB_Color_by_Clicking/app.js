let button = document.querySelector('.text');
let body = document.querySelector('body');
let colorName = document.querySelector('.colorPic');



button.addEventListener('click', ()=>{
  let color =  generateColor();
  body.style.backgroundColor = color;
 colorName.textContent = color;
 console.log(color);
})

function generateColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green},${blue})`
}