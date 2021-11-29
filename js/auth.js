document.onload = estaAutenticado();

function estaAutenticado(){
    if(localStorage.getItem("token") != null){
        document.location.href="../consumir-API/home.html";
    }else{
        console.log("no autenticado");
    }
}

const formularioLogin = document.querySelector('#form-login');

localStorage.setItem("urlApi","http://webapi.andromedacorp.3hcps.info/api/");
url = localStorage.getItem("urlApi");

formularioLogin.addEventListener('submit', (e)=>{
    e.preventDefault();

    const usuario = document.querySelector('#login-usuario').value; 
    const password = document.querySelector('#login-password').value; 
    
    auth(usuario,password)
})

function auth(usuario, password){
    const Usuario = { 
        login: usuario,
        password: password
    }

    fetch(this.url + "Usuario/login",{
        method:'POST',
        body: JSON.stringify(Usuario),
        headers:{
            "content-type": "application/json"
        }
    })
        .then(res => res.text())
        .then(data => {
            var token = data; 

            if(token.indexOf(401) != -1){ 
                alert("No autorizado")
            }else{
                localStorage.setItem("token",token);
                formularioLogin.reset();
                document.location.href="../consumir-API/home.html";
            }
        })
}