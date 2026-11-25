/* Condicionales switch CASE

EL SWITCH es una estructura de control utilizada para tomar decisiones basadas en el valor de una expresión.
Es útil cuando se desea comparar un mismo valor con múltiples casos posibles y ejecutar un bloque de código según el caso coincida.
*/

let valor;
valor = parseInt(prompt('Ingrese valores numéricos entre 1 y 3'));

switch (valor) {
    case 1:
        document.writeln('Usted ingresó el número: ', valor);
        break;
    case 2:
        document.writeln('Usted ingresó el número: ', valor);
        break;
    case 3:
        document.writeln('Usted ingresó el número: ', valor);
        break;

    default:
        document.writeln('El número está fuera del rango o no es un número válido')
        break;
}

document.writeln('<br>')

let color;
color = prompt('Ingrese uno de estos colores: Rojo, Verde o Azul');
switch (color) {
    case 'Rojo':
        document.writeln('Usted ingresó el color: ', color);
        break;
    case 'Verde':
        document.writeln('Usted ingresó el color: ', color);
        break;
    case 'Azul':
        document.writeln('Usted ingresó el color: ', color);
        break;

    default:
        document.writeln('El color está fuera del rango o no es un color válido')
        break;
}
