//Aqui adicionamos um evento de escutar o click do mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
//Criamos uma função que a ouvir o click do mouse, ele adicione uma Class, que está fazendo nossa caixa (div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
})

window.revelar = ScrollReveal({reset:true});


revelar.reveal('.efeito-img-topo', {
    duration: 2000,
    distance: '90px'
})


revelar.reveal('.clientes-efeito', {
    duration: 2000,
    distance: '120px'
})

revelar.reveal('.principais-produtos', {
    duration: 2000,
    distance: '200px'
})

revelar.reveal('.sobre-nos-js', {
    duration: 2000,
    distance: '200px',
    origin: 'left'
})




//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVE uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});