document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });

class usuario {
    constructor(mail, password) {
        this.mail = mail
        this.password = password
    }
}

const form = document.getElementById("form");
const usuarios = [];//array donde se guardan los usuarios que se loggean


function validarFormulario(e) {
    e.preventDefault();
    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value

    const user = new usuario(email, password)

    usuarios.push(user)

    form.reset()
    console.log(usuarios)
    
    
    localStorage.setItem('User-Logged', JSON.stringify(usuarios.mail));

    this.submit();
  }

 