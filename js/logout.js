window.addEventListener("load", function() {
    console.log("logon.js se está ejecutando");

    let logoutLink = document.querySelector("#logout");
    if (logoutLink) {
        logoutLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            console.log("Enlace de Logon ha sido clickeado");

            let emailUsuario = localStorage.getItem("emailUsuario");
            if (emailUsuario) {
                localStorage.removeItem("emailUsuario");
                let bienvenidaDiv = document.querySelector(".bienvenida");
                bienvenidaDiv.innerHTML = "";
                let mostrarEnlaces = document.querySelectorAll(".loginRegister");
                for (let i = 0; i < mostrarEnlaces.length; i++) {
                    mostrarEnlaces[i].style.display = 'block';
                }
            }
        });
    }
});