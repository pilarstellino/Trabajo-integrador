window.addEventListener("load", function() {
    console.log("logout.js se está ejecutando");
    let emailUsuario = localStorage.getItem("emailUsuario");
    
    if (emailUsuario) {
        localStorage.removeItem("emailUsuario");

        let bienvenidaDiv = document.querySelector(".bienvenida");
        bienvenidaDiv.innerHTML = "";

        let mostrarEnlaces = document.querySelectorAll(".loginRegister");
       
        if (mostrarEnlaces.length > 0) {
            for (let i = 0; i < mostrarEnlaces.length; i++) {
                mostrarEnlaces[i].style.display = 'block';
            }
        }
    }

    console.log(localStorage);
});