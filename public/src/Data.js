let shopItemsData = [];

//Base
let nameCatA = "Grano Básico";
let catA = [
  {
    id: "a1",
    nombre: "cafe",
    cantidad: "?",
    unidad: "Lb",
    img: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000184.png",
  },
  {
    id: "a2",
    nombre: "aceite",
    cantidad: "?",
    unidad: "Lt",
    img: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004357.png",
  },
  {
    id: "a3",
    nombre: "azucar",
    cantidad: "?",
    unidad: "Kg",
    img: "https://res.cloudinary.com/cloudinarymercamio/image/upload/dpr_auto,q_50,f_jpg,w_auto/007997",
  },
  {
    id: "a4",
    nombre: "arroz",
    cantidad: "?",
    unidad: "Lb",
    img: "https://res.cloudinary.com/cloudinarymercamio/image/upload/dpr_auto,q_50,f_jpg,w_auto/031282",
  },
  {
    id: "a5",
    nombre: "sal",
    cantidad: "?",
    unidad: "Kg",
    img: "https://waco-agency-saas-repository.s3.amazonaws.com/MM_PROD/products/029166.jpg",
  },
  {
    id: "a6",
    nombre: "harina",
    cantidad: "?",
    unidad: "Lb",
    img: "https://waco-agency-saas-repository.s3.amazonaws.com/MM_PROD/products/051011.jpg",
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


fetch('https://echoprojects3d-default-rtdb.firebaseio.com/alacena.json')
            .then(response => response.json())
            .then(data => {
              console.log(data)
              let aceite = data.aceite;
              let azucar = data.azucar;
              let cafe = data.cafe;
              let sal = data.sal;
              let arroz = data.arroz;
              let harina = data.harina;
              
              document.getElementById("aceite").innerHTML = aceite;
              document.getElementById("azucar").innerHTML = azucar;
              document.getElementById("cafe").innerHTML = cafe;
              document.getElementById("sal").innerHTML = sal;
              document.getElementById("harina").innerHTML = harina;
              document.getElementById("arroz").innerHTML = arroz;
              
            });


/*
catB.forEach((producto) => {
  shopItemsData.push(producto);
});
catC.forEach((producto) => {
  shopItemsData.push(producto);
});
*/


