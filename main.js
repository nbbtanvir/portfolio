const threeDot=document.getElementsByClassName('threeDot')[0];
const menuBar=document.getElementsByClassName('menu')[0];
threeDot.addEventListener('click',()=>{
menuBar.classList.toggle('active');
})