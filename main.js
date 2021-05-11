const menu = document.getElementById('menu');
const close = document.getElementById('close');
const open = document.getElementById('open')

open.addEventListener('click', function(){
    menu.style.display = 'flex'
} )

close.addEventListener("click", function () {
  menu.style.display = "none";
});