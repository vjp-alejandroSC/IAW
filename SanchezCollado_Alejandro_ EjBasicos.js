// Ejercicio 1

function frutos() {
    switch (fruta) {
        case 'Manzana': {
            console.log("La temporada es Invierno");
            break;
        }
        case 'Naranja': {
            console.log("La temporada es Invierno");
            break;
        }
        case 'Fresa': {
            console.log("La temporada es Primavera");
            break;
        }
        case 'Cereza': {
            console.log("La temporada es Primavera");
            break;
        }
        case 'Melocoton': {
            console.log("La temporada es Verano");
            break;
        }
        default:
            console.log("La temporada es Otoño");
    }
}

// Ejercicio 2

function limites_legales(carretera, velocidad, matrícula) {
    if (carretera == "Urbana") {
        if (velocidad < 0) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad inferior a la recomendada");
        }
        else if (velocidad >= 0 && velocidad <= 30) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad apropiada para la vía");
        }
        else if (velocidad > 30) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad superior a la recomendada");
        }
    }
    else if (carretera == "Comarcal") {
        if (velocidad < 45) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad inferior a la recomendada");
        }
        else if (velocidad >= 45 && velocidad <= 90) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad apropiada para la vía");
        }
        else if (velocidad > 90) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad superior a la recomendada");
        }
    }
    else if (carretera == "Nacional") {
        if (velocidad < 50) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad inferior a la recomendada");
        }
        else if (velocidad >= 50 && velocidad <= 100) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad apropiada para la vía");
        }
        else if (velocidad > 100) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad superior a la recomendada");
        }
    }
    else if (carretera == "Autovía") {
        if (velocidad < 60) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad inferior a la recomendada");
        }
        else if (velocidad >= 60 && velocidad <= 120) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad apropiada para la vía");
        }
        else if (velocidad > 120) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad superior a la recomendada");
        }
    }
    else if (carretera == "Autopista") {
        if (velocidad < 60) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad inferior a la recomendada");
        }
        else if (velocidad >= 60 && velocidad <= 120) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad apropiada para la vía");
        }
        else if (velocidad > 120) {
            console.log("El vehículo con matrícula " + matrícula + " circula a una velocidad superior a la recomendada");
        }
    }
    else {
        console.log("Introduce una carretera válida: Urbana, Comarcal, Nacional, Autovía, Autopista");
    }
}

// Ejercicio 3

// a
function mostrar_mes_linea() {
    meses_ano = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses_ano.length; i++) {
        console.log(meses_ano[i]);
    }
}

// b
function mostrar_mes_separado() {
    let j = "";
    meses_ano = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < meses_ano.length; i++) {
        j = j + meses_ano[i] + ", "
    }
    console.log(j);
}

// Ejercicio 4

// a)

function meses_estudio() {
    const horas_estudio = [30, 25, 40, 13, 51, 22, 19, 15, 31, 28, 34, 17];
    let total_horas = 0;
    for (let i = 0; i < horas_estudio.length; i++) {
        total_horas = total_horas + horas_estudio[i];
    }

    let promedio = total_horas / 12;

    console.log("El promedio de las horas en el año es " + promedio);
}

// b)

function meses_max_estudio() {
    const horas_estudio = [30, 25, 40, 13, 51, 22, 19, 15, 31, 28, 34, 17]; // Array con las horas de estudio
    //  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11
    max_horas = horas_estudio[0]; // Inicializo con valor 0 la hora más mayor de entre todas.

    mes_Maxhoras = 0; // El número del mes lo inicializo en la primera posición del array, o sea, a 0


    for (let i = 0; i < horas_estudio.length; i++) {
        if (max_horas < horas_estudio[i]) {

            max_horas = horas_estudio[i];

            mes_Maxhoras = i + 1;
        }
    }

    console.log("El mes con más horas de estudios es el " + mes_Maxhoras + " con " + max_horas + "h.");
}

// c)

function meses_min_estudio() {
    const horas_estudio = [30, 25, 40, 13, 51, 22, 19, 15, 31, 28, 34, 17]; // Array con las horas de estudio
    //  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11
    min_horas = horas_estudio[0]; // Inicializo con el valor de la posición 0 del array la hora más mayor de entre todas. (min_horas vale --30--)

    mes_Minhoras = 0; // El número del mes lo inicializo en la primera posición del array, o sea, a 0


    for (let i = 0; i < horas_estudio.length; i++) {
        if (min_horas > horas_estudio[i]) {

            min_horas = horas_estudio[i];

            mes_Minhoras = i + 1;
        }
    }

    console.log("El mes con menos horas de estudios es el " + mes_Minhoras + " con " + min_horas + "h.");
}

// d)
function formato_array() {
    const horas_estudio = [30, 25, 40, 13, 51, 22, 19, 15, 31, 28, 34, 17]; // Array con las horas de estudio
    //  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11

    console.log("HORAS DE ESTUDIO:")

    let mensaje = "";

    for (let i = 0; i < horas_estudio.length; i++) {
        switch (i) {

            case 0: {
                mensaje = "ENERO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 1: {
                mensaje = "FEBRERO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 2: {
                mensaje = "MARZO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 3: {
                mensaje = "ABRIL: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 4: {
                mensaje = "MAYO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 5: {
                mensaje = "JUNIO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 6: {
                mensaje = "JULIO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 7: {
                mensaje = "AGOSTO: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 8: {
                mensaje = "SEPTIEMBRE: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 9: {
                mensaje = "OCTUBRE: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 10: {
                mensaje = "NOVIEMBRE: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
            case 11: {
                mensaje = "DICIEMBRE: ";
                console.log(mensaje + horas_estudio[i]);
                break;
            }
        }
    }
}

// e) ¿Qué pasa si en los apartados b) y c) hay más de un mes con el mismo número de horas?

function meses_max_estudio_repetido() {
    const horas_estudio = [30, 25, 40, 31, 51, 22, 19, 15, 51, 28, 34, 17]; // Array con las horas de estudio
    //  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11
    max_horas = horas_estudio[0]; // Inicializo con valor 0 la hora más mayor de entre todas.

    mes_Maxhoras = 0; // El número del mes lo inicializo en la primera posición del array, o sea, a 0


    for (let i = 0; i < horas_estudio.length; i++) {
        if (max_horas < horas_estudio[i]) {

            max_horas = horas_estudio[i];

            mes_Maxhoras = i + 1;
        }
    }

    console.log("El mes con más horas de estudios es el " + mes_Maxhoras + " con " + max_horas + "h.");
}

// RESPUESTA: Según tengo hecha mi función cogerá el primer valor que sea el mayor de todos en el array y 
// aunque haya otro con las mismas horas de estudio, no se actualizará el mes porque no cumple con
// la condición del "if". Si en la condición le cambiara el "<" por un "<=", entonces sí se actualizaría,
// poniendo así que el mes con más horas es el noveno.



// Ejercicio 5

// a)
const PILOTOS = ["Verstappen", "Hamilton", "Alonso", "Sainz", "Norris", "Leclerc", "Russell", "Piastri", "Gasly", "Stroll"];

// b)

console.log(PILOTOS);

// c)

console.log(PILOTOS.reverse());



// Ejercicio 6
function premios_f1() {
    const PARRILLA = ["Alonso", "Sainz", "Hamilton", "Leclerc", "Bottas", "Russell"]

    linea = 0;

    for (let i = 0; i < PARRILLA.length; i += 2) {

        piloto1 = PARRILLA[i];
        piloto2 = PARRILLA[i + 1];
        linea++;

        console.log("Línea " + linea + ":");
        console.log(piloto1 + ",");
        console.log(piloto2);
        console.log("");
    }
}

// Ejercicio 7

function premios_f1_renglon() {
    const PARRILLA = ["Alonso", "Sainz", "Hamilton", "Leclerc", "Bottas", "Russell"]

    linea = 0;

    for (let i = 0; i < PARRILLA.length; i += 2) {

        piloto1 = PARRILLA[i];
        piloto2 = PARRILLA[i + 1];
        linea++;

        console.log("Línea " + linea + ": " + piloto1 + ", " + piloto2);
    }
}


// Ejercicio 8


// Array de los módulos del primer curso

// function modulosASIRyNotas() {
//     const modulos = [
//         ['FHW', 'GBD', 'ISO', 'LMSGI', 'PARE', 'FOL'],
//         ['SRI', 'IAW', 'EIE', 'ASO', 'SAD', 'ASGBD']
//     ];

//     const notas = [
//         [9,9,7,7,9,9], 
//         [9,8,9,9,9,10]
//     ];

//     console.log("Notas en el ciclo de ASIR del alumno Alejandro Sánchez: ");

//     for (let i = 0; i < modulos.length; i++) {
//         if (i === 0) {
//             console.log("Primer curso: ");
//         } else {
//             console.log("Segundo curso: ");
//         }

//         let linea = ""; // Creo una cadena para almacenar la salida en una línea
//         let promedioPrimero = "";



//         let promedioSegundo = "";
//         let promedioCiclo = "";

//         for (let j = 0; j < modulos[i].length; j++) {
//             linea += modulos[i][j] + ": " + notas[i][j] + "; ";
//         }

//         console.log(linea); // Imprimo la cadena con la información del curso en una sola línea
//         console.log();
//     }
// }

function modulosASIRyNotas() {
    const modulos = [
        ['FHW', 'GBD', 'ISO', 'LMSGI', 'PARE', 'FOL'],
        ['SRI', 'IAW', 'EIE', 'ASO', 'SAD', 'ASGBD']
    ];

    const notas = [
        [9, 9, 7, 7, 9, 9],
        [9, 8, 9, 9, 9, 10]
    ];

    console.log("Notas en el ciclo de ASIR del alumno Alejandro Sánchez: ");

    let totalSuma = 0; // Variable para almacenar la suma total de las notas
    let totalNumeros = 0; // Variable para almacenar el total de notas

    for (let i = 0; i < modulos.length; i++) {
        if (i === 0) {
            console.log("Primer curso: ");
        } else {
            console.log("Segundo curso: ");
        }

        let linea = "";

        let suma = 0; // Suma de notas por curso
        let numero = modulos[i].length; // Número de módulos por curso

        for (let j = 0; j < numero; j++) {
            linea += modulos[i][j] + ": " + notas[i][j] + "; ";
            suma += notas[i][j];
            totalSuma += notas[i][j];
            totalNumeros++;
        }

        console.log(linea);

        const promedio = suma / numero;
        if (i === 0) {
            console.log("Promedio notas primer curso: " + promedio.toFixed(2));
        } else {
            console.log("Promedio notas segundo curso " + (i + 1) + ": " + promedio.toFixed(2));
        }
    }

    const totalPromedio = totalSuma / totalNumeros;
    console.log("Nota promedio ciclo: " + totalPromedio.toFixed(2));
}

// Ejercicio 9

function transformarFrase() {
    let frase = "implantación de aplicaciones web es un módulo del segundo curso del ciclo administración de sistemas informáticos en red";

    // Reemplazar "aplicaciones web" por "Aplicaciones Web"
    frase = frase.replace("implantación de aplicaciones web", "Implantación de Aplicaciones Web");

    // Reemplazar "módulo del segundo curso" por "Módulo del segundo curso"
    frase = frase.replace("módulo del segundo curso", "Módulo del segundo curso");

    // Reemplazar "administración de sistemas informáticos en red" por "ASIR"
    frase = frase.replace("administración de sistemas informáticos en red", "ASIR");

    // Mostrar la frase modificada
    console.log(frase);
}

// transformarFrase();

