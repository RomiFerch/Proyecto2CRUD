//Declaración Variables
let form = document.getElementById('formulario')
let nombre = document.getElementById('descripcion')
let price = document.getElementById('precio')
let cantidad = document.getElementById('stock')
let btnAdd = document.getElementById('btnCrear')
let tabla1 = document.getElementById('tabla1')

let arrayArticulos = []

//Funcion para tomar los datos y agregarlos al array como objeto = producto
const agregarProducto = () =>{
    let producto = {
        descripcion: nombre.value,
        precio: price.value,
        stock: cantidad.value,

    }
    arrayArticulos.push(producto)
    
    guardarLS()
    //form.reset()
//la funcioón para resetar el for,mulario no se por no me funciona :´(
}
//Funcion para levar los datos del Array al LocalStorage
const guardarLS = () => {
    localStorage.setItem('products', JSON.stringify(arrayArticulos))

    llenarTabla()
    
}
//funcion para llenar tabla en el tbody del HTML
//quisiera poner condicionales pero no se como :(
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

document.addEventListener('DOMContentLoaded', llenarTabla)

//Funcion para darle accion a los botones del formulario
//Diosito iluminame

function accionBtn(){
    let btnEditar = Array.from(document.getElementsByClassName('fa-solid edit fa-pen-to-square mx-3'))
    let btnTrash = Array.from(document.getElementsByClassName('fa-solid trash fa-trash-can mx-3'))

    btnTrash.forEach((deleteBtn)=>{
        const newLocal = 'hola'
        deleteBtn.addEventListener('click', console.log(newLocal))
    })
}

    
/*const deleteBtn = (dBtn) =>{
    btnTrash.addEventListener('click' (accionBtn))
    accionBtn.prevenDefault()
    
//     if(Element.arrayArticulos === dBtn){
//         arrayArticulos.splice
//     }

//     console.log(accionBtn);
}
    accionBtn()
}

//console.log(btnEditar);
//falta los agregar eventListener



/*const verForm = () => {
    descripcion.innerHTML = '';
}*/


llenarTabla()
btnAdd.addEventListener('click', agregarProducto)

agregarProducto.prevenDefault

