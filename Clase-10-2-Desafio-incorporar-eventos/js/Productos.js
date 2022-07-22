const ProductosInfo = [
 {
    "id": 100,
    "nombre": "Skull Hipster Ring",
    "img": "./imagenes/our_collection/Anillos.jpg",
    "precio": 80,
    "categoria": "Rings",
 },

 {
    "id": 101,
    "nombre": "Dragon tail",
    "img": "./imagenes/our_collection/Cadenas.jpg",
    "precio": 110,
    "categoria": "Chains",
 },

 {
    "id": 102,
    "nombre": "Leather black",
    "img": "./imagenes/our_collection/Pulseras-2.jpg",
    "precio": 180,
    "categoria": "Bracelets",
 },

 {
    "id": 103,
    "nombre": "Metal fence",
    "img": "./imagenes/our_collection/Aretes.jpg",
    "precio": 70,
    "categoria": "Earrings",
 },

 {
    "id": 104,
    "nombre": "Blades of olympus",
    "img": "./imagenes/our_collection/Llaveros.jpg",
    "precio": 80,
    "categoria": "Keychains",
 },

 {
    "id": 105,
    "nombre": "Crow Ring",
    "img": "./imagenes/our_collection/crow_ring.jpg",
    "precio": 90,
    "categoria": "Rings",
 },

 {
    "id": 106,
    "nombre": "Red Skin Indian",
    "img": "./imagenes/our_collection/indian.jpg",
    "precio": 70,
    "categoria": "Rings",
 },

 {
    "id": 107,
    "nombre": "Skulls",
    "img": "./imagenes/our_collection/skulls.jpg",
    "precio": 80,
    "categoria": "Rings",
 },

 {
    "id": 108,
    "nombre": "Shen Long",
    "img": "./imagenes/our_collection/Shen Long_.jpg",
    "precio": 200,
    "categoria": "Bracelets",
 },

];

const carrito = [];

function renderizarProductos() {
    let tienda = document.getElementById('tienda')
}

ProductosInfo.forEach((joyas) => {

    let productoHTML = `
    <div class="col">
            <div class="card h-100">
            <img src="${joyas.img}" class="card-img-top" alt="...">
                <div class="card-body">
                      <h5 class="card-title">${joyas.nombre}</h5>
                      <p class="card-text">$ ${joyas.precio}</p>
                      <p class="card-text"> Category: ${joyas.categoria}</p>
                      <p class="card-text"> Product ID: ${joyas.id} </p>
                      <button class="card-button">Add to car</button>
                </div>
            </div>
    </div>
    `
    tienda.innerHTML += productoHTML

});
renderizarProductos();

// FILTRADO DE PRODUCTOS CON BOTON

// All products 

let filteredAll = ProductosInfo.filter(all => all.categoria != "")

let botonAll = document.getElementById("botonAll");

botonAll.onclick = () => {console.log(filteredAll)};

//Rings

let filteredRigs = ProductosInfo.filter(rings => rings.categoria === "Rings")

let botonRings = document.getElementById("botonRings");

botonRings.onclick = () => {console.log(filteredRigs)};

//Chains

let filteredChains = ProductosInfo.filter(chains => chains.categoria === "Chains")

let botonChains = document.getElementById("botonChains");

botonChains.onclick = () => {console.log(filteredChains)};

// Bracelets

let filteredBracelets = ProductosInfo.filter(bracelets => bracelets.categoria === "Bracelets")

let botonBracelets = document.getElementById("botonBracelets");

botonBracelets.onclick = () => {console.log(filteredBracelets)};

// Earrings

let filteredEarrings = ProductosInfo.filter(earrings => earrings.categoria === "Earrings")

let botonEarrings = document.getElementById("botonEarrings");

botonEarrings.onclick = () => {console.log(filteredEarrings)};

// KeyChains

let filteredKeyChains = ProductosInfo.filter(keychains => keychains.categoria === "Keychains")

let botonKeychains = document.getElementById("botonKeychains");

botonKeychains.onclick = () => {console.log(filteredKeyChains)};




