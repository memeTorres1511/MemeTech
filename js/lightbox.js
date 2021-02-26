const imagenes1 = document.querySelectorAll('.product__img')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

imagenes1.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        alert('auch')
    })
})