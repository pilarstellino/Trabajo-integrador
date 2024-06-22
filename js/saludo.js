function saludoUsuario() {
    const emailUsuario = localStorage.getItem("emailUsuario");
    const headers = document.querySelectorAll('.Inicio'); 
    
    if (emailUsuario) {
        headers.forEach(Inicio => {
            Inicio.innerHTML += `<p>Bienvenido: ${emailUsuario}</p>`;

        });
    }  else {
        const loginRegisterLinks = document.querySelectorAll(".loginRegister");
        for (let i = 0; i < loginRegisterLinks.length; i++) {
            loginRegisterLinks[i].style.display = 'none';
        }
    }
}

window.onload = saludoUsuario;