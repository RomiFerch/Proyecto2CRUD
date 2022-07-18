//Declaración Variables
let formulario1 = document.querySelector('formulario')
let nombre = document.getElementById('descripcion')
let price = document.getElementById('precio')
let cantidad = document.getElementById('stock')
let boton = document.getElementById('btnCrear')
let tabla1 = document.getElementById('tabla1')

let arrayArticulos = []

//Funciones
const agregarProducto = () =>{
    let producto = {
        descripcion: nombre.value,
        precio: price.value,
        stock: cantidad.value,

    }
    arrayArticulos.push(producto)
 
    guardarLS()
    

    
}
const guardarLS = () => {
    localStorage.setItem('products', JSON.stringify(arrayArticulos))

    llenarTabla()
    
}

const llenarTabla = () =>{
    
    tabla1.innerHTML=''

    arrayArticulos = JSON.parse(localStorage.getItem('products'))

    if (arrayArticulos === null){
        arrayArticulos = []
    }else {
        arrayArticulos.forEach((producto, index) => {
            tabla1.innerHTML+= `
            <tr class="mt-4 ">
                <td>${index +1}</td>
                <td>${producto.descripcion}</td>
                <td>$${producto.precio}</td>
                <td>${producto.stock}</td>
                <td>
                    <span class="float-auto">
                        <i class="fa-solid edit fa-pen-to-square mx-3"></i>
                        <i class="fa-solid trash fa-trash-can mx-3"></i>
                    </span>
                </td>
            </tr>
            `
    
        })
       
        
    }
    }
    
   
   


function accionBtn(){
    let btnEditar = Array.from(document.getElementsByClassName('edit'))
    let btnTrash = Array.from(document.getElementsByClassName('fa-solid trash fa-trash-can mx-3'))
    
    document.addEventListener('DOMContentLoaded', llenarTabla)

const deleteBtn = (dBtn) =>{
    btnTrash.addEventListener('click' (accionBtn))
    accionBtn.prevenDefault()

    console.log(accionBtn);
}
    accionBtn()
}

//console.log(btnEditar);
//falta los agregar eventListener



/*const verForm = () => {
    descripcion.innerHTML = '';
}*/


llenarTabla()
boton.addEventListener('click', agregarProducto)

