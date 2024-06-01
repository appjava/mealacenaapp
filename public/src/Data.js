
let shopItemsData = [];
//Base
let nameCatA = "Grano Básico";
let catA = [
  {
    id: "a1",
    nombre: "Cafe",
    cantidad: 4,
    unidad: "Lb",
    img: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000184.png",
  },
  {
    id: "a2",
    nombre: "Aceite",
    cantidad: 4,
    unidad: "Lt",
    img: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004357.png",
  },
  {
    id: "a3",
    nombre: "Azucar",
    cantidad: 10,
    unidad: "Kg",
    img: "https://res.cloudinary.com/cloudinarymercamio/image/upload/dpr_auto,q_50,f_jpg,w_auto/007997",
  },
];
//Verduras y Fruta
let nameCatB = "Verduras y Frutas";
let catB = [
  {
    id: "b1",
    name: "Edredones",
    price: 140000,
    desc: "Edredón Doble Faz + Forros Cojín",
    img: "images/productos/catB/b1/b1.jpg",
    img1: "images/productos/catB/b1/b1.jpg",
    img2: "images/productos/catB/b1/b2.jpg",
    img3: "images/productos/catB/b1/b3.jpg",
  },
];
//Aseo
let nameCatC = "Aseo";
let catC = [
  {
    id: "c1",
    name: "Bolso de mano tipo baúl",
    price: 60000,
    desc: "Bolso de mano tipo baúl con correa adicional. Poco uso. Estado 8/10",
    img: "images/productos/catC/c1/cover.png",
    img1: "images/productos/catC/c1/c1.jpg",
    img2: "images/productos/catC/c1/c2.jpg",
  },
  {
    id: "c2",
    name: "Blusa ELA",
    price: 60000,
    desc: "Blusa ELA talla M. Nueva sin etiqueta",
    img: "images/productos/catC/c2/cover.png",
    img1: "images/productos/catC/c2/c1.jpg",
    img2: "images/productos/catC/c2/c2.jpg",
  },
];

catA.forEach((producto) => {
  shopItemsData.push(producto);
});
catB.forEach((producto) => {
  shopItemsData.push(producto);
});
catC.forEach((producto) => {
  shopItemsData.push(producto);
});



