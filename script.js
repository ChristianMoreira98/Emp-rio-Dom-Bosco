//Aqui adicionamos um evento de escutar o click do mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
//Criamos uma função que a ouvir o click do mouse, ele adicione uma Class, que está fazendo nossa caixa (div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
})
