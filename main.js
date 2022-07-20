//Declaración Variables
let form = document.getElementById('formulario')
let nombre = document.getElementById('descripcion')
let price = document.getElementById('precio')
let cantidad = document.getElementById('stock')
let btnAdd = document.getElementById('btnCrear')
let tabla1 = document.getElementById('tabla1')

let arrayArticulos = []

//Funcion para tomar los datos y agregarlos al array como objeto = producto
const addArticle = () =>{
    let producto = {
        descripcion: nombre.value,
        precio: price.value,
        stock: cantidad.value,

    }
    arrayArticulos.push(producto)

    nombre.value=""
    price.value=""
    cantidad.value=""
    
    guardarLS()
   
}
//Funcion para llevar los datos del Array al LocalStorage
const guardarLS = () => {
    localStorage.setItem('products', JSON.stringify(arrayArticulos))

    printTable()
    
}
//funcion para llenar tabla en el tbody del HTML
//poner condicionnales
const printTable = () =>{
    
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
                        <i class="fa-solid edit fa-pen-to-square mx-3" id=${producto.descripcion}></i>
                        <i class="fa-solid trash fa-trash-can mx-3"id=${producto.descripcion}></i>
                    </span>
                </td>
            </tr>
            `
    
        })
        
        let botonBorrar = Array.from(document.getElementsByClassName('fa-solid trash fa-trash-can mx-3'))
            botonBorrar.forEach((deleteBtn)=>{
            deleteBtn.addEventListener('click', (event)=> deleteArticle(event.target.id))
        })
        
    }
    }
    printTable()

//reparar retorno a la tabla
function deleteArticle(descripcion){
    arrayArticulos = arrayArticulos.filter((producto)=>producto.descripcion!==descripcion)
    addArticle()
    }

//document.addEventListener('DOMContentLoaded', printTable)

    printTable()
    btnAdd.addEventListener('click', addArticle)




