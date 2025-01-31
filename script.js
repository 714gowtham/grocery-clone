let searchform = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
    
}

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>
    {
        searchform.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        
    }

    var swiper = new Swiper("product-slider", {
        loop:true
         ,products: 20,
        autoplay:{
            delay:7500,
            spacebetweendesableonintegration:false
        },
        breakpoints :{
            0:{
                slidesperview:1,
            },
            768:{
                slidesperview:2,
            },
           1020:{
                slidesperview:3,
            }
        },

      },
    );
