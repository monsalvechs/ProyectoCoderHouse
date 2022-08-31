document.addEventListener("DOMContentLoaded", function (e) {

    let userLogged = localStorage.getItem('User-Logged');
  
    let infoUser = document.getElementById("info-user");
  
    if (userLogged) {
      userLogged = JSON.parse(userLogged.mail);
  
      infoUser.innerText = infoUser.innerText + '' + userLogged.mail;
    }
  
    if (document.getElementById("cerrarSesion")) {
      document.getElementById("cerrarSesion").addEventListener('click', function () {
        localStorage.removeItem('User-Logged');
      });
    }
  
  
  });