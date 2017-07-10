// Ejercicio 1 - Números Capicua
document.write( "Ejercicio 1 - Números Capicua" + "<br />")

function esCapicua(num){
  var reverseNum = parseInt(num.toString().split('').reverse().join(''));
  if (num == reverseNum){
    document.write("El número " + num + " es capicúa" + "<br />"); }
   else if (num != reverseNum) {
    document.write("El número " + num + " NO es capicúa" + "<br />");
   }
}
esCapicua(1234554321); // El número 1234554321 es capicúa
esCapicua(11001); // El número 11001 NO es capicúa

// Ejercicio 2 - Calcular Potencia de un Número
document.write("<br />" + "Ejercicio 2 - Calcular la Potencia" + "<br />")
function calcPotencia (num, elev){
  var res = Math.pow(num,elev);
  document.write("La potencia de " + num + " elevado a " + elev + " es igual a " + res + "<br />");
}
calcPotencia(2,3); // La potencia de 2 elevado a 3 es igual a 8


// Ejercicio 4 - Contar palabras en un string
document.write("<br />" + "Ejercicio 4 - Contar las palabras en un string" + "<br />");
function contarPalabras(cadena){
  var numPalabra = cadena.split(" ").length;
  document.write(cadena + " tiene " + numPalabra + " palabras"+ "<br />");
}
contarPalabras("El mundo es tan cruel"); // El mundo es tan cruel tiene 5 palabras

// Ejercicio 6 - Calcular cuántas vocales hay
document.write("<br />" + "Ejercicio 6 - Cuántas vocales hay?" + "<br />");

function Vocales(palabra) {
  return (palabra == 'a' || palabra == 'e' || palabra == 'i' || palabra == 'o' || palabra == 'u')
}

function filtrarLetra(palabra) {
  var filtrar = palabra.split('');
  var res = filtrar.filter(Vocales).length;
  document.write("El número de vocales es " + res + "<br />");
}

filtrarLetra("ojo, mouse, lapiz"); // El número de vocales es 7

// Ejercicio 7 - Hallar la suma de los impares
document.write("<br />" + "Ejercicio 7 - Hallar la suma de los impares " + "<br />");
function sumImpares(num1,num2){
  var elemt1 = ((num2-num1)/2) +1;
  var elemt2 = (num1 + num2)/2;
  var result = elemt1*elemt2;
  document.write("La suma de los números impares entre " + num1+ " y " + num2 + " es " + result + "<br />" );
}
sumImpares(1,7); // La suma de los números impares entre 1 y 7 es 16

// Ejercicio 9 - Devolver string al revés
document.write("<br />" + "Ejercicio 9 - Devolcer palabra al revés" + "<br />")

function reverseWord(palabra){
  var res = palabra.toLowerCase().split('').reverse().join('');
  document.write("La palabra " + palabra + " al revés es " + res + "<br />");
}
reverseWord("Roma"); // La palabra Roma al revés es amor
