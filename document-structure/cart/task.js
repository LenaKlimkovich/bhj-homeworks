const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const btn = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products')


plus.forEach(p => {
    p.addEventListener('click', (e) => {
        const targetProduct = e.target.closest('.product');
        const value = targetProduct.querySelector('.product__quantity-value');
        value.textContent = Number(value.textContent) + 1;
    })
})


minus.forEach(m => {
    m.addEventListener('click', (e) => {
        const targetProduct = e.target.closest('.product');
        const value = targetProduct.querySelector('.product__quantity-value');
        if (Number(value.textContent) > 1) {
            value.textContent = Number(value.textContent) - 1;
        }
        const id = targetProduct.dataset.id;
        const existing = cart.querySelector(`.cart__product[data-id="${id}"]`);
        if (existing) {
            const count = existing.querySelector('.cart__product-count');
            const result = Number(count.textContent) - 1;
            if (result > 0) {
                count.textContent = result;
            }
            if (result === 0) {
                existing.remove();
            }
        }
    })
})


btn.forEach(b => {
    b.addEventListener('click', (e) => {
        const targetProduct = e.target.closest('.product');
        const id = targetProduct.dataset.id;
        const photo = targetProduct.querySelector('.product__image');
        const quantity = targetProduct.querySelector('.product__quantity-value');
        let existing = cart.querySelector(`.cart__product[data-id="${id}"]`);


        if (existing) {
            const count = existing.querySelector('.cart__product-count');
            count.textContent = Number(count.textContent) + Number(quantity.textContent);

            const cartImage = existing.querySelector('.cart__product-image');
            const copyPhoto = photo.cloneNode(true);
            copyPhoto.classList.add('copy-photo');
            document.body.appendChild(copyPhoto);
            
            const photoRect = photo.getBoundingClientRect();
            const cartRect = cartImage.getBoundingClientRect();

            copyPhoto.style.left = photoRect.left + 'px';
            copyPhoto.style.top = photoRect.top + 'px';

            let currentX = parseFloat(copyPhoto.style.left);
            let currentY = parseFloat(copyPhoto.style.top);

            const targetX = cartRect.left;
            const targetY = cartRect.top;

            const dx = (targetX - currentX) / 15;
            const dy = (targetY - currentY) / 15;

            let intervalId = setInterval(() => {
                copyPhoto.style.left = currentX + dx + 'px';
                copyPhoto.style.top = currentY + dy + 'px';
                currentX = parseFloat(copyPhoto.style.left);
                currentY = parseFloat(copyPhoto.style.top);

                if ((targetX - currentX < 3 && targetY - currentY < 3)) {
                    clearInterval(intervalId);
                    copyPhoto.remove();
                }
            }, 10)
            return;
        }

        const cartItem = document.createElement("div");
        cart.appendChild(cartItem);
        cartItem.classList.add('cart__product');
        cartItem.dataset.id = targetProduct.dataset.id;
        const cartImg = document.createElement("img");
        cartItem.appendChild(cartImg);
        cartImg.classList.add('cart__product-image');
        cartImg.src = targetProduct.querySelector('.product__image').src;
        const productCount = document.createElement('div');
        cartItem.appendChild(productCount);
        productCount.classList.add('cart__product-count');
        productCount.textContent = quantity.textContent;

    })
})