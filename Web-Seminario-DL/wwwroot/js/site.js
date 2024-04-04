// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.addEventListener('scroll', function () {
    var menu = document.getElementById('tecsa-menu-1');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Cambia 100 por la posición en la que quieres que el menú se haga sticky
        menu.classList.add('menu-sticky');
    } else {
        menu.classList.remove('menu-sticky');
        console.log("ta q funciona :u")
    }
    
});