window.addEventListener("load", function() {
    let emailUsuario = localStorage.getItem("emailUsuario");

    if (emailUsuario) {
        let link = '<a href="#" id="logout">logout</a>';
        
        let bienvenidaDiv = document.querySelector(".bienvenida");
        if (bienvenidaDiv) {
            bienvenidaDiv.innerHTML = "Bienvenido: " + emailUsuario + " " + link;
        }

        let Links = document.querySelectorAll(".loginRegister");
        if (Links.length > 0 ) {
            Links[0].style.display = 'none';
            Links[1].style.display = 'none';
        }
    }

    console.log(localStorage);
});