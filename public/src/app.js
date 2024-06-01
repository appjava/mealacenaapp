document.getElementById("nameCatA").innerHTML = nameCatA;

let basket = JSON.parse(localStorage.getItem("data")) || [];

let ShoppingCart = document.getElementById("alacena");

let generateCartItems = () => {
  
    if (basket.length !== 0) {
      
      return (ShoppingCart.innerHTML = basket.map((x) => {
          
          let { id } = x;
          let search = shopItemsData.find((y) => y.id === id) || [];
          return `
                <div class="producto">
                <img src=${search.img}>
                <h4 id="nombre">${search.nombre}</h4>
                <div class="inventario">
                    <div class="actual">
                    <span id="decremento" onclick="decrement(${id})">-</span>
                    <h3 id="cantidad">${search.cantidad}</h3>
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
      
      ShoppingCart.innerHTML = `<h3>Alacena Vacia</h3>`;
    }
  };
  
generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    generateCartItems();
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
    generateCartItems();
    
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
  };
  