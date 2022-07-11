
class producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = ((this.precio * 19)/100) + this.precio;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new producto(1,"anillo calavera", "25.000"));
productos.push(new producto(2,"anillo piloto", "28.000"));
productos.push(new producto(3,"anillo pirata", "24.000"));
productos.push(new producto(4,"anillo vaquero", "27.000"));
productos.push(new producto(5,"brazalete cruz", "33.000"));
productos.push(new producto(6,"brazalete cuero", "30.000"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();

// console.log(productos)

const productos2 = productos.filter((item) => item.nombre.includes("ANILLO"));

// console.log(productos);
console.log(productos2);