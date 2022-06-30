// MI EJERCICIO 1 EDADES

let anoActual = 2022;
let anoNacimiento = parseInt(prompt('En que año naciste?'));
let cumpleanos = prompt('Ya cumpliste años este año? Responde con: si o no.');

if (cumpleanos === 'si') {
	alert('Felicidades tienes ' + (anoActual - anoNacimiento) + ' años.');
	alert(
		'Aprovecha tu vida, en el año 2040 tendras ' +
			(anoActual - anoNacimiento + 18) +
			' años'
	);
} else {
	alert('Felicidades tienes ' + (anoActual - anoNacimiento - 1) + ' años.');
	alert(
		'Aprovecha tu vida, en el año 2040 tendras ' +
			(anoActual - anoNacimiento + 17) +
			' años'
	);
}

// EJERCICIO MIO 2 BUCLE

let numeroDeVeces = parseInt(
	prompt(
		'Por favor ingrese el numero de veces que quiere imrpimir la palabra -hola- en la consola'
	)
);

for (let i = 0; i < numeroDeVeces; i++) {
	console.log('Hola');
}

// EJERCICIO 3 SUMAR

let numero = parseInt(
	prompt('Ingresa un numero cualquiera para el ejercicio de bucle con suma')
);

for (let i = 1; i <= 12; i++) {
	console.log(`${numero} + ${i} = ${numero * i}`);
}
1992;
