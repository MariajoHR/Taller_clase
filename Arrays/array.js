/*ARRAY O ARREGLOS
un aarray es una estructura de datos que permite almacenar una colección ordenada de elementos; estos elementos puedes ser cadenas de texto, valores numericos, booleanos, entre otros. Igualmente podrían ser un conjunto de funciones e inclusive otros arrays
*/

//declaración de un array vacío
let numeros = [];
// Llenar un array con elementos, cada elemento dentro del array se separa por coma.

numeros = [5,4,8,12,16,35,44,2]
document.writeln(`Elementos:`, numeros);
document.writeln('<br>');

// un array puede crearse directamente sin ser declarado:
Numeros = [5,1,15,20,25,30,25];
document.writeln(`Elementos:`, Numeros); 
document.writeln('<br>');

// Visuaizar uno o alguno de los elementos del array según parámetro o ídice indicado
document.writeln('Elemento discriminado: ', numeros[3]);
document.writeln('<br>');
document.writeln('Elemento discriminado: ', Numeros[0]);
document.writeln('<br>');

// cambiar un elemento del array indicando el índice de posición y/o ubicación existente y el valor del elemento a cambiar
numeros [3] = 84
document.writeln('cambio de un elemento: ', numeros);
document.writeln('<br> ------------------');
document.writeln('<br>');

// Array con valores de tipo texto o string
let frutas = ['Manzanas', 'Peras', 'Mandarinas', 'Naranjas', 'Kiwi' ];
document.writeln('Diversas frutas: ', frutas );
document.writeln('<br>');

// Métodos de ARRAY

//Ver cantidad de elementos
document.writeln('Cantidad de elementos del array de frutas: ', frutas.length);
document.writeln('<br>');
document.writeln('Cantidad de elementos del array de Numeros: ', Numeros.length);
document.writeln('<br> ------------------');
document.writeln('<br>');

let abecedario = ['A','X','Z','C','D','B','R','S','W','K','T'];
document.writeln(abecedario);
document.writeln('<br>');
document.writeln(abecedario.sort()); // Organiza alfabéticamente las letras.
document.writeln('<br>');

// Funcion Reverse organiza los elementos  alfabéticamente pero en inversa.
document.writeln(abecedario.reverse()); // Organiza alfabéticamente las letras.
document.writeln('<br>');