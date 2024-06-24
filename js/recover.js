window.addEventListener("load", function(){
    let formRecover = document.querySelector("#formRecover");
    let mensajeEmail = "Por favor escriba su email.";
    let mensajeTerminos = "Por favor acepte el campo Quiero recuperar mi contraseña";
    let mensajeExito = "Recibirás un email con las instrucciones para recuperar tu contraseña";
    let mensajeDiv = document.querySelector("#mensaje");
    if(formRecover){
        let terminos = document.querySelector("#terminosRecover");
        let correoRecover =  document.querySelector("#emailRecover");
        formRecover.addEventListener("submit", function(event){
            event.preventDefault();
            mensajeDiv.innerHTML = "";
            mensajeDiv.style.color = "red";
         if(correoRecover.value === ""){
            mensajeDiv.innerHTML = mensajeEmail;
         } else if (!terminos.checked){
            mensajeDiv.innerHTML = mensajeTerminos;
            mensajeDiv.style.color = "red";
         } else {
            mensajeDiv.innerHTML = mensajeExito;
            mensajeDiv.style.color = "green";
            let linkLogin = document.createElement("a");
            linkLogin.href = "login.html";
            linkLogin.textContent = "Ir al login";
            mensajeDiv.appendChild(linkLogin);
         }
        });
    
        
    }
});


