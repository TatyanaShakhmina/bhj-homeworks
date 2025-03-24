const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

products.forEach(product => {
    const add = product.querySelector('.product__add');
    const quantityValue = product.querySelector('.product__quantity-value');
    const quantityControlDec = product.querySelector('.product__quantity-control_dec');
    const quantityControlInc = product.querySelector('.product__quantity-control_inc');

    let quantity = 1;

    quantityControlInc.addEventListener('click', () => {
        quantity++;
        quantityValue.textContent = quantity;
    });

    quantityControlDec.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });

    add.addEventListener('click', () => {
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;

        const existingCartProduct = cartProducts.querySelector(`[data-id="${productId}"]`);

        if (existingCartProduct) {
            const countCart = existingCartProduct.querySelector('.cart__product-count');
            countCart.textContent = parseInt(countCart.textContent) + quantity;
        } else {
            cartProducts.insertAdjacentHTML('afterbegin', `
              <div class="cart__product" data-id= "${productId}">
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${quantity}</div>
              </div>
            `);
        }
    });
});