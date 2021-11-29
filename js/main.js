document.onload = estaAutenticado();

function estaAutenticado(){
    if(localStorage.getItem("token") != null){
        console.log("autenticado");
    }else{
        document.location.href="../consumir-API/login.html";
        alert("Debe estar logeado");
    }
}

const cerrarSesion = document.getElementById('cerrarSesion-button');

cerrarSesion.addEventListener('click',()=>{
    localStorage.removeItem('token');
    document.location.href="../consumir-API/login.html";
});