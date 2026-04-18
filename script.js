// Usuario simulado
const USER = "admin";
const PASS = "1234";

// Verifica sesión al cargar
window.onload = function() {
    const usuario = localStorage.getItem("usuario");
    if(usuario){
        mostrarBienvenida(usuario);
    }
}

function login(){
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const error = document.getElementById("error");

    if(user === USER && pass === PASS){
        localStorage.setItem("usuario", user);
        mostrarBienvenida(user);
    } else {
        error.textContent = "Datos incorrectos";
    }
}

function mostrarBienvenida(usuario){
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("welcomeBox").style.display = "block";
    document.getElementById("nombreUsuario").textContent = "Hola " + usuario;
}

function logout(){
    localStorage.removeItem("usuario");
    location.reload();
}