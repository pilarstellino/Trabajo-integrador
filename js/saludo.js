window.addEventListener("load", function() {
    console.log("saludo.js se está ejecutando");
    let emailUsuario = localStorage.getItem("emailUsuario");

    if (emailUsuario) {
        let link = '<a href="#" id="logout">logout</a>';
        
        let bienvenidaDiv = document.querySelector(".bienvenida");
        if (bienvenidaDiv) {
            bienvenidaDiv.innerHTML = "Bienvenido: " + emailUsuario + " " + link;
        }

        let Links = document.querySelectorAll(".loginRegister");
       
        if (link && Links.length > 0) { 
            for (let i = 0; i < Links.length; i++) {
                Links[i].style.display = 'none';
            }
        }

        let logoutLink = document.getElementById("logout");
        logoutLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            console.log("Enlace de logout ha sido clickeado");

        });
    }

    console.log(localStorage);
});
