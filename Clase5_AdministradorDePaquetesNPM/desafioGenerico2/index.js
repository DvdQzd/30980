// Realizar un proyecto en node.js que permita calcular cuántos años y días totales transcurrieron desde la fecha de tu nacimiento. Para ello utilizar la dependencia moment instalándola en forma local desde npm. Imprimir los resultados por consola. Hacer las modificaciones necesarias para que sólo se actualicen los patches para la librería recién instalada.

// Un ejemplo de salida:
// Hoy es 11/01/2021
// Nací el 29/11/1968
// Desde mi nacimiento han pasado 52 años.
// Desde mi nacimiento han pasado 19036 días.

// Ayuda:
// Utilizar los métodos diff y format de la librería moment.


// --- CON MOMENT JS

// const moment = require('moment');
// function conMoment() {

//     const dateString = "20/05/1988";

//     const HernanSBirthday = moment(dateString, 'DD/MM/YYYY');
//     const now = moment();

//     const diffYears = now.diff(HernanSBirthday, 'years');
//     const diffDays = now.diff(HernanSBirthday, 'days');

//     console.log(`Hoy es : ${now.format('DD/MM/YYYY')}`);
//     console.log(`Nací el ${HernanSBirthday.format('DD/MM/YYYY')}`);
//     console.log(`Desde mi nacimiento han pasado ${diffYears} años.`);
//     console.log(`Desde mi nacimiento han pasado ${diffDays} días.`);
// }
// conMoment();

// // ---- CON DAY JS

// const dayjs = require('dayjs')

// function conDayJS() {


//     const birthday = dayjs('1988-05-20');
//     const now = dayjs()

//     const diffYears = now.diff(birthday, 'year');
//     const diffDays = now.diff(birthday, 'day');

//     console.log(`Hoy es : ${now.format('DD/MM/YYYY')}`);
//     console.log(`Nací el: ${birthday.format('DD/MM/YYYY')}`);
//     console.log(`Desde mi nacimiento han pasado ${diffYears} años.`);
//     console.log(`Desde mi nacimiento han pasado ${diffDays} días.`);
// }

// conDayJS();