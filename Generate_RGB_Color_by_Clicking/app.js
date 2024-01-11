let button = document.querySelector('.text');
let body = document.querySelector('body');
let colorName = document.querySelector('.colorPic');
let copybtn = document.querySelector('.copy-btn');
let coppid = document.querySelector('.coppid');


button.addEventListener('click', ()=>{
    let color =  generateColor();
    body.style.backgroundColor = color;
    colorName.value = color;
    console.log(color);
})

copybtn.addEventListener('click', ()=>{
     navigator.clipboard.writeText(colorName.value);
     copybtn.textContent = "";
     copybtn.textContent = 'coppid';

})

function generateColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green},${blue})`
}