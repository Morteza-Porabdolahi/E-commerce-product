let avatar = document.getElementById('avatar-img');
let cardElement = document.getElementById('card-section');
avatar.addEventListener('click', function () {
    if (avatar.classList.contains('avatar-border')) {
        avatar.classList.remove('avatar-border');
        cardElement.style.display = 'none'
    } else {
        avatar.classList.add('avatar-border');
        cardElement.style.display = 'block'
    }
});
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let number = document.getElementById('product-number');
let cartNumber = document.getElementById('badge-cart');
let counter = 0
plus.addEventListener('click', function () {
    counter++;
    number.innerHTML = counter;
    cartNumber.innerHTML = counter;
});
minus.addEventListener('click', function () {
    counter--;
    number.innerHTML = counter;
    cartNumber.innerHTML = counter;
    if (counter < 0) {
        counter = 0;
        number.innerHTML = 0;
        cartNumber.innerHTML = 0;
    }
});
let cartButton = document.getElementById('cart-add-btn');
cartButton.addEventListener('click', function () {
    if (counter > 0) {
        let cardDescription = document.getElementById('cart-description');
        cardDescription.innerHTML = '';
        let Element = document.getElementById('cart-price');
        let createElement = document.createElement('section');
        createElement.classList.add('media');
        //------------------//
        let imgCreate = document.createElement('img');
        imgCreate.setAttribute('src', 'assets/img/image-product-1-thumbnail.jpg');
        imgCreate.classList.add('cart-img-buy')
        createElement.appendChild(imgCreate);
        //---------------------//
        let mediaBody = document.createElement('section');
        mediaBody.classList.add('media-body');
        let mediaBodyContent = document.createElement('p');
        mediaBodyContent.classList.add('media-content-para')
        mediaBodyContent.innerHTML = 'Fall Limited Edition Sneakers $125.00 ' + ' * ' + counter + ' ';
        let span = document.createElement('span');
        span.classList.add('price-span')
        span.innerHTML = '$' + counter * 125 + '.00';
        mediaBodyContent.appendChild(span)
        mediaBody.appendChild(mediaBodyContent);
        createElement.appendChild(mediaBody);
        //----------------------//
        let checkBtn = document.createElement('button');
        checkBtn.classList.add('btn', 'btn-block')
        checkBtn.style.cssText = 'background-color : rgb(255, 94, 0) ; color : white ; border-radius : 7px;'
        checkBtn.innerHTML = 'CheckOut';
        $(checkBtn).insertAfter(Element);
        //------------------------//
        var deleteSpan = document.createElement('span');
        let deleteimg = document.createElement('img');
        deleteimg.classList.add('trash-icon')
        deleteimg.src = 'assets/img/icon-delete.svg';
        deleteSpan.classList.add('cursor')
        deleteSpan.appendChild(deleteimg);
        mediaBodyContent.appendChild(deleteSpan);
        //-----------------------//
        deleteSpan.addEventListener('click', function () {
            cardDescription.innerHTML = 'Your cart is empty';
            Element.removeChild(createElement)
            checkBtn.remove();
            cartButton.removeAttribute('disabled');
            number.innerHTML = 0;
            cartNumber.innerHTML = 0;
            counter = 0;
        });
        //......................//
        minus.addEventListener('click', function () {
            if (number.innerHTML <= 0) {
                cardDescription.innerHTML = 'Your cart is empty';
                Element.removeChild(createElement)
                checkBtn.remove();
                cartButton.removeAttribute('disabled');
                number.innerHTML = 0;
                counter = 0;
            }
        });
        //.....................//
        Element.appendChild(createElement);
        cartButton.setAttribute('disabled', 'disabled');
    } else {
        let alertContainer = document.getElementById('alert');
        alertContainer.style.opacity = '1';
        setTimeout(() => {
            alertContainer.style.opacity = '0'
        }, 2500);
    }
});
// ............................. //
let thumbnails = document.getElementsByClassName('thumbnail-img');
let BigImage = document.getElementById('product-img');
let images = ['assets/img/image-product-1.jpg', 'assets/img/image-product-2.jpg', 'assets/img/image-product-3.jpg', 'assets/img/image-product-4.jpg'];
let modal = document.getElementById('modal-container');
let modalImg = document.getElementById('modal-img')
for (let i = 0; i < thumbnails.length; i++) {
    let NewThumbnails = thumbnails[i];
    NewThumbnails.addEventListener('click', function () {
        BigImage.setAttribute('src', images[i]);
        modal.style.display = 'flex';
        modalImg.setAttribute('src', images[i]);
    });
};
let closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});
// ---------Modal Slide------------- //
let previousModal = document.getElementById('previus-modal');
let nextModal = document.getElementById('next-modal');
let index = 0;
nextModal.addEventListener('click', function () {
    index++;
    if (index > thumbnails.length) { index = 1; }
    modalImg.setAttribute('src', images[index - 1])
});
previousModal.addEventListener('click', function () {
    index--;
    if (index < 1) { index = 4; }
    modalImg.setAttribute('src', images[index - 1])
});