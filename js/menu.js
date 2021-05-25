const MUJER = document.querySelector('.MUJER')
const menu = document.querySelector('.menu-navegacion')


MUJER.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != MUJER){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})