( function (){

    let boton = document.getElementsByClassName('presionar')[0];
    let piepagina = document.querySelector('footer');
    let retirar = document.getElementsByClassName('seller')[0];
    let agregar = document.getElementById('social');
    let regresar = document.getElementsByClassName('share')[0];

    if(window.innerWidth <= 400){
    boton.addEventListener('click', () => {
        piepagina.classList.toggle('seller');
        piepagina.classList.remove('social');

        retirar.style.opacity = 0;
        retirar.style.zIndex = 0;

        agregar.style.opacity = 1;
        agregar.style.zIndex = 3;
        agregar.style.transform = 'translateY(40px)';
    })
    regresar.addEventListener('click', () => {
        piepagina.classList.remove('seller');
        piepagina.classList.toggle('social');

        retirar.style.opacity = 1;
        retirar.style.zIndex = 3;

        agregar.style.opacity = 0;
        agregar.style.zIndex = 0;
    })}


    else{
        boton.addEventListener('click', () =>{

            var opacity = parseFloat(window.getComputedStyle(agregar).opacity);
            agregar.style.opacity = (opacity === 0) ? 1 : 0;
        })
    }

})()
