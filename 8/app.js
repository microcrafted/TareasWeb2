let productos = [
    {nombre: "camisa", precio: 300, cantidad: 5},
    {nombre: "pantalon", precio: 550, cantidad: 5},
    {nombre: "zapatos", precio: 750, cantidad: 3},
    {nombre: "sombrero", precio: 550, cantidad: 3}
];
let carrito = [];
let opcion;


do{
    opcion = prompt(mostrarMenu());
    opcion = parseInt(opcion);

    if(isNaN(opcion)||opcion < 1 || opcion > productos.length + 5){
        console.log("Opcion no valida, por favor ingrese una opcion valida");
    }else if(opcion >= 1 && opcion <= productos.length){
        agregarCarrito(productos[opcion - 1]);
    }else if(opcion === productos.length + 1){
        agregarProductoNuevo();
    }else if(opcion === productos.length + 2){
        mostrarCarritoTotal();
    }else if(opcion === productos.length + 3){
        eliminarDelCarrito();
    }
}while(opcion !== productos.length + 4);
console.log("Gracias por su compra, hasta luego");

function mostrarMenu(){
    let menu = "¿Que producto desea agregar?\nProductos:\n";

    for(let i = 0; i <productos.length; i++){
        menu += (i+1)+".- "+ productos[i].nombre + " - $" + productos[i].precio + " - cantidad: " + productos[i].cantidad +"\n" ;
    }

    menu += `\n${productos.length + 1}- Agregar producto nuevo\n`;
    menu += `${productos.length + 2}- Mostrar total del carrito\n`;
    menu += `${productos.length + 3}- Eliminar producto del carrito\n`
    menu += `${productos.length + 4}- Salir\n`;
    return menu;
}

function agregarCarrito(producto){
    let nombre = producto.nombre;
    let precio = producto.precio;
    let cantidad = prompt("¿Cuántas piezas de este producto quieres llevar?");
    cantidad = parseInt(cantidad);

    if(isNaN(cantidad) || cantidad <= 0){
        alert("Valores no validos, por favor vuelva a intentarlo")
    } else if(cantidad <= producto.cantidad){
        producto.cantidad -= cantidad;
        let productoNuevo = {nombre: nombre, precio: precio, cantidad: cantidad};
        carrito.push(productoNuevo);
        console.log(`se agregaron ${cantidad} piezas de ${producto.nombre} al carrito`);
    }else{
        alert("Lo siento, no hay productos sufientes. Intenta con una cantidad de piezas menor");
    }
}

function mostrarCarritoTotal(){
    if(carrito.length === 0){
        alert("El carrito esta vacio");
    }else{
        let carritoMensaje = "Productos en el carrito:\n";
        let total = 0
        let totalProducto = 0;
        for(let i = 0; i < carrito.length; i++){
            totalProducto = carrito[i].precio * carrito[i].cantidad; 
            carritoMensaje += (i+1)+".- " + carrito[i].cantidad + "x "+ carrito[i].nombre +" - $" + totalProducto +"\n";
            total += totalProducto;
        }
        carritoMensaje += "\n Total: $"+total;
        console.log(carritoMensaje);
    }
}

function agregarProductoNuevo(){
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    let cantidad = prompt("Ingrese la cantidad del producto");
    precio = parseInt(precio);   
    cantidad = parseInt(cantidad);
    if(isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0){
        console.log("Valores no validos, por favor vuelva a intentarlo");
    //trim() elimina los espacios en blanco al inicio y al final de una cadena de texto, si el usuario ingresa solo espacios en blanco, el resultado sera una cadena vacia ""
    }else if(nombre.trim() === ""){
        console.log("Nombre no valido, por favor ingrese un nombre valido");
    }else{
        let nuevoProducto = {nombre: nombre, precio: precio, cantidad: cantidad};
        productos.push(nuevoProducto);
        console.log(`Producto ${nombre} agregado a la lista de productos`);
    }
}

function eliminarDelCarrito(){
    if(carrito.length === 0){
        alert("El carrito esta vacio");
    }else{
        let eliminar = prompt("Ingrese el numero del producto que desea eliminar del carrito");
        eliminar = parseInt(eliminar);
        if(isNaN(eliminar) || eliminar < 1 || eliminar > carrito.length){
            console.log("Numero de producto no valido");
        }else{
            //el metodo splice devuelve un arreglo con el elemento eliminado, por eso se pone [0] para obtener el objeto eliminado
            let productoEliminado = carrito.splice(eliminar - 1, 1)[0];
            
            for(let i = 0; i < productos.length;i++){
                if(productoEliminado.nombre === productos[i].nombre){
                    productos[i].cantidad += productoEliminado.cantidad;
                }
            }

            console.log(`Producto ${productoEliminado.nombre} eliminado del carrito`);
        }
    }
}