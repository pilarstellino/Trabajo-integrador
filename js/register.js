window.addEventListener("load", function(){
    let form = document.querySelector("#registerForm");
    let errorDiv = document.getElementById("error");
     errorDiv.style.color = "red"

    if (form) {
        let correo = document.querySelector("#registerEmail");
        let clave = document.querySelector("#registerContraseña");
        let confirmacionClave = document.querySelector("#confirmacionClave");

        form.addEventListener("submit", function(event){
            event.preventDefault(); 
            let mensajesError = [];

            if(correo.value === "") {
                mensajesError.push("Por favor complete el campo Email.");
            }else if(clave.value === "") {
                mensajesError.push("Por favor complete el campo Contraseña.");
            }else if(clave.value.length < 6) {
                mensajesError.push("Debe ingresar al menos 6 caracteres.");
            }else if(confirmacionClave.value!== clave.value) {
                mensajesError.push("Las contraseñas no coinciden.");
            }

            if(mensajesError.length > 0) {
                errorDiv.innerHTML = ""; 
                mensajesError.forEach(function(message) {
                    let p = document.createElement('p');
                    p.textContent = message;
                    errorDiv.appendChild(p);
                });
            } else {
                window.location.href = "login.html";
            }
        });
    }
});


