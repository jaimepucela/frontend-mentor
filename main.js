var contenedorNumero= document.querySelector(".contenedor_numeros")
var boton = document.querySelector("#boton")
var oculto = document.querySelector(".oculto")
var entero = document.querySelector(".entero")
var gracias = document.querySelector(".gracias")



contenedorNumero.addEventListener('click' , function(event){
    var selecionDeNumeros= event.target.innerText;
    oculto.innerHTML = "<p>You selected "+ selecionDeNumeros +" out of 5</p>"
    if(selecionDeNumeros >0 || selecionDeNumeros <=5){
        boton.addEventListener("click", ()=>{
            entero.style.display= "none";
            gracias.style.display="block";
        })

    }
})



