



document.getElementById("nameCatA").innerHTML = nameCatA;

let basket = JSON.parse(localStorage.getItem("data")) || [];
<<<<<<< HEAD
/*
shopItemsData.forEach((producto) => {
  basket.push(producto);
});
*/
let ShoppingCart = document.getElementById("alacena");
=======

let alacena = document.getElementById("alacena");
>>>>>>> a53e80004256d8563334b588b9828ab37941cc34

let generateProducts = () => {
  
    if (shopItemsData.length !== 0) {
      
<<<<<<< HEAD
      return (ShoppingCart.innerHTML = shopItemsData.map((x) => {
=======
      return (alacena.innerHTML = basket.map((x) => {
>>>>>>> a53e80004256d8563334b588b9828ab37941cc34
          
          let { id } = x;
          let search = shopItemsData.find((y) => y.id === id) || [];
          return `
                <div class="producto">
                <img src=${search.img}>
                <h4 id="nombre">${search.nombre}</h4>
                <div class="inventario">
                    <div class="actual">
                    <span id="decremento" onclick="decrement(${id})">-</span>
                    <h3 id=${search.nombre}>${search.cantidad}</h3>
                    <span id="incremento" onclick="increment(${id})">+</span>
                    </div>
                </div>
                <div class="meta">
                    <h4 id="unidad">${search.unidad}</h4>
                </div>
                </div>
            `;
        })
        .join(""));
    } else {
      
      alacena.innerHTML = `<h3>Alacena Vacia</h3>`;
    }
  };
  
generateProducts();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    search.cantidad += 1;

  
    generateProducts();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    generateProducts();
    
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.cantidad;
  };
  