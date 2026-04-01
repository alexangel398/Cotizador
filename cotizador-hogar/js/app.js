//!Inicio de Primera Etapa
/* 2) Se crea una constante llamada 'costoM2' y se le asigna el costo base por metro cuadrado.
*/
/* let fm; */
let fmPropiedad
let fmUbicacion
const costoM2 = 1.16;
/* 3) Se crea una variable que captura el valor de metros cuadrados ingresados mediante prompt(). */

let metros2 = prompt("Ingresa los metros cuadrados de la vivienda: ");
/* metrosM2 = Number(metrosM2) */

// El f.m. de la vivienda se vuelve dinámico
let tipoVivienda = prompt("Selecciona la vivienda a cotizar: \n" +
    "('Casa', 'P.H.', 'Dto. Edificio')")

if (tipoVivienda !== '') {
    for (propiedad of datosPropiedad) {
        if (propiedad.tipo === tipoVivienda) {
            fmPropiedad = propiedad
            break
        }
    }
}

let tipoUbicacion = prompt("Selecciona la ubicación de la vivienda: \n" +
    "('CABA', 'Tandil', 'Costa Atlántica')")

if (tipoUbicacion !== '') {
    for (ubicacion of datosUbicacion) {
        if (ubicacion.tipo === tipoUbicacion) {
            fmUbicacion = ubicacion
            break
        }
    }
}

//validamos que 'fm' sea mayor a 1.000 y que metros2 sea un número
if (fmPropiedad && fmUbicacion && parseInt(metros2)) {
    let resultado = fmPropiedad.factor * fmUbicacion.factor * metros2 * costoM2
    console.log("Resultado de la Póliza: $ " + resultado)
} else {
    console.warn("Hubo un error en los datos ingresados.")
}

/* 4) Se crea una variablel llamada 'fm' con un factor multiplicador estimado. Se puede aprovechar y agregar algunos de los que están escritos de forma hardcoded en el documento HTML > Select Propiedad. */

/* let fm = 1.07; //por ejemplo, el Factor Multiplicador para una casa del tipo P.H. */

/* let resultado = fm * metrosM2 * costoM2;

alert("Resultado de la multiplicación: $ " + resultado); */
//!Fin de Primera Etapa

/* SEGUN EL CHAT */
/* const costoM2 = 1.16;

document.getElementById("btnCotizar").addEventListener("click", function () {

    const fm = Number(document.getElementById("propiedad").value);
    const ubicacion = Number(document.getElementById("ubicacion").value);
    const metros = Number(document.getElementById("metros2").value);

    // Validación básica: que hayan seleccionado propiedad y ubicación
    if (isNaN(fm) || isNaN(ubicacion)) {
        alert("Por favor seleccioná el tipo de propiedad y la ubicación.");
        return;
    }

    const total = costoM2 * metros * fm * ubicacion;

    document.getElementById("valorPoliza").textContent = total.toFixed(2);
}); */
/* /* SEGUN EL CHAT */