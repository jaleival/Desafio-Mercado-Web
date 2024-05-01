const agregarProducto = document.querySelectorAll('.agregarProducto');
const product = document.querySelector('.product');

const carrito = (e) => {
    let productCounter = 1;
    const counterParagraph = document.querySelector('.counterParagraph');
    const { name } = e.target.dataset;
    const cartRow = document.createElement('div');
    const cartItems = document.querySelectorAll('.cart-items')[0];
    const cartItemsNames = cartItems.querySelectorAll('.card-title');

    for(let i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText === name) {
            alert('El producto ya está incluído en el carro.');
            return;
        }
        productCounter++;
    }

    const cartRowContents = `
    <p><h5 class="card-title fs-5 mx-1">${name}</h5></p>
    <img src="../assets/img/${name}.png" alt="${name}.png" class="card-img-top w-50 img-fluid"></img>
    `;

    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    counterParagraph.innerHTML = productCounter;
};

agregarProducto.forEach( button => button.addEventListener('click', carrito));