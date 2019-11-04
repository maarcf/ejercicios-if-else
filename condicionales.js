//EJERCICIO 1 con modificación del Ej. 4
let usuarioRegistrado = prompt(`¿Cuál es su usuario?`);
let contraseñaUsuarioRegistrado = prompt(`¿Cuál es su contraseña?`)
console.log(usuarioRegistrado);
console.log(contraseñaUsuarioRegistrado);

let usuarioCorrecto = "AdaLove";
let contraseñaUsuarioCorrecta = "ada2019";


if(usuarioRegistrado === usuarioCorrecto && contraseñaUsuarioCorrecta === contraseñaUsuarioRegistrado) {
    alert("Bienvenide, AdaLove")
} else {
    alert("Usuario y/o contraseña incorrecta")
};

//EJERCICIO 5 OPERADOR TERNARIO
usuarioRegistrado === usuarioCorrecto && contraseñaUsuarioCorrecta === contraseñaUsuarioRegistrado ? alert("Bienvenide, AdaLove") : alert("Usuario y/o contraseña incorrecta");

// EJERCICIO 2
let numeroIngresado = prompt("Ingrese cualquier número");
if((numeroIngresado % 2) === 0) {
    alert("El número es par")
} else {
    alert("El número es impar")
};

//EJERCICIO 5 OPERADOR TERNARIO
numeroIngresado % 2 === 0 ? alert("El número es par") : alert("El número es impar");

// EJERCICIO 3
let edadUsuario = prompt("Hola, ¿podrías decirme tu edad?");
if(edadUsuario >= 18) {
    alert("Ud. es mayor de edad")
} else {
    alert("Ud. es menor de edad")
};

//EJERCICIO 5 OPERADOR TERNARIO
edadUsuario >= 18 ? alert("Ud. es mayor de edad") : alert("Ud. es menor de edad"); 

//EJERCICIO 6
let horaLocal = prompt("¿Qué hora es?");
if(horaLocal >= 5 && horaLocal < 12) {
    alert("Buen día")
}
else if(horaLocal >= 12 && horaLocal < 20) {
    alert("Buenas tardes")
}
else {
    alert("Buenas noches")
}; 

//EJERCICIO 7
let notaAlumne = prompt("Ingrese la nota de 0 a 10");
if(notaAlumne >= 9) {
    alert("La nota es EXCELENTE")
}
else if(notaAlumne < 9 && notaAlumne >= 6) {
    alert("La nota es BUENA")
}
else {
    alert("El examen NO está APROBADO")
}; 

//EJERCICIO 8
let diaDeLaSemana = prompt("¿Qué día de la semana es hoy?");
if(diaDeLaSemana === "lunes") {
    alert("Su nombre proviene de la luna. En latín, se lo llamaba 'dies Lūnae'")
}
else if(diaDeLaSemana === "martes") {
    alert("Su nombre proviene del planeta Marte. En latín, se lo llamaba 'dies Martis'")
}
else if(diaDeLaSemana === "miércoles") {
    alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Mercuriī'")
}
else if(diaDeLaSemana === "jueves") {
    alert("Su nombre proviene del planeta Mercurio. En latín, se lo llamaba 'dies Iovis'")
}
else if(diaDeLaSemana === "viernes") {
    alert("Su nombre proviene del planeta Venus. En latín, se lo llamaba 'dies Veneris'")
}
else if(diaDeLaSemana === "sabado") {
    alert("Su nombre proviene del Shabat hebreo, el día de descanso del pueblo judío")
}
else {
    alert(((diaDeLaSemana === "domingo") && "Su nombre es cristiano y proviene de la palabra latina 'Dominica', que significa 'señoril', por ser 'el día del Señor'") || alert("No ha ingresado un día válido"))
};
