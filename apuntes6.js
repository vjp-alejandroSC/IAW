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
        switch(i){

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

const PARRILLA = ["Alonso", "Sainz", "Hamilton", "Leclerc", "Bottas", "Russell"]

