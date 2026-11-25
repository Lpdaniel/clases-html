const input = document.getElementById("contrasena");
const boton = document.getElementById("btn_ojo");
const imagen = document.getElementById("img-ojo");

boton.addEventListener("click", function(){

    if(input.type === "password") {
        input.type = "text";
        imagen.src = "img/ojo_op.png";
        boton.setAttribute("arial-label", "Ocultar contraseña");

    }else {
        input.type = "password";                   // ocultar
        imagen.src = "img/ojo_cls.png";            // ojo cerrado
        boton.setAttribute("arial-label", "Mostrar contraseña");
    }
});