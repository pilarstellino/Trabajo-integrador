let formulario = document.querySelector("#loginForm");
if (formulario) {
    let email = document.querySelector("#loginEmail");
    let contraseña = document.querySelector("#loginContraseña");
        formulario.addEventListener("submit", function(event) {
       event.preventDefault();
        if(email.value === "") {
            alert("Por favor complete el campo email");
        } else if(contraseña.value === ""){
            
            alert("Por favor complete el campo contraseña");
        } else if(contraseña.value.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")

        } else {
            localStorage.setItem('emailUsuario', email.value);
            window.location.href = "index.html"; 
        }
    });
}