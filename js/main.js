function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}

translate();

function mostrarData() {
    var email = document.getElementById("inputEmail").value;
    var pass = document.getElementById("inputPassword").value;
    document.getElementById("printEmail").innerHTML = '<div><h4>Datos de formulario</h4></div>' +
        '<div>El correo electrónico ingresado es:</div>' + email + '<div>La clave ingresada es:</div>';
    document.getElementById("printPass").innerHTML = pass;
}
