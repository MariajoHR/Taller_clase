/* (POO) Ptogramación Orientada a Objetos.

La POO es un paradicma de programación que organiza el software en clases y objetos para modelar conceptos del mundo real. Este enfoque promueve la reutilización del código, modularidad mejor organización del software.
*/

//Crear el objeto automovil

document.writeln('Creación de Objeto AUTOMOVIL <br> ');

var Aut = {
    marca : 'Toyota',
    modelo : 'corolla',
    color : 'Azul',
    año : '2026',
    año : '2026',
    combustible : 'Diesel',
    tipo : 'Sedán',
    radio:['FM','MP4','USB']
}

//Acceso a las propiedades; Se utiliza la notaci{on de punto (auto.marca) para acceder a las propiedades del objeto.

document.writeln(`Marca: ${Auto.marca}`, '<br>');

class Vehiculos {
    //Atributos
    marca = 'Toyota';
    modelo = 'corolla';
    color = 'Azul';
    año = '2026';
    combustible = 'Diesel';
    tipo = 'Sedán';
    precio = '$78.285.000';

   //Métodos
   // Representan acciones o comportamientos en este caso de vehículo
    acelerar(){
    return `El ${this.marca} acelera de 0 a 100 km/h en tan sólo 3 segundos.`; }
     frenar(){
    return `El ${this.marca} ${this.modelo} puede frenar de 100 a 0 km/h en tan sólo 2.5 segundos.`; }
}

// Crear un objeto basado en la Clase Vehiculos.
const ferrari = new Vehiculos();
// Se declara una constante, luego la palabra reservada NEW que significa que está creando  una nueva instancia de tipo objeto y al colocar el nombre de la clase, para este nuevo objeto  tendrá  a disposición  los atributos y los métodos de la clase previamente creada.

//Mostrar las propiedades y métodos del objeto ferrari.
document.writeln (`Marca: ${ferrari.marca} <br>`);
document.writeln (`Modelo: ${ferrari.modelo} <br>`);
document.writeln (`color: ${ferrari.color} <br>`);

document.writeln('<br>');
document.writeln('Creación de Objeto Animal <br>');

class Animales {
    //Atributos
    animal = 'gato'
    raza = 'Siamés';
    tamaño = 'Mediano';
    origen = 'Tailandia';
    peso = '5.5';
    sobrevivencia = '20';

    //Métodos
    colores(){
    return `El ${this.raza} su color depende del ambiente en el que se encuentre.`; 
}
    cuidados(){
    return `El ${this.animal} ${this.raza} Cepillar su cabello frecuentemente.`;
    }
}
    
const gato = new Animales();
document.writeln(`Animal: ${gato.animal} <br>`);
document.writeln(`raza: ${gato.raza} <br>`);
document.writeln(`tamaño: ${gato.tamaño} <br>`);
document.writeln(`origen: ${gato.origen} <br>`);
document.writeln(`peso: ${gato.peso} <br>`);
document.writeln(`supervivencia: ${gato.supervivencia} <br>`);
document.writeln(`gato: ${gato.colores} <br>`);
document.writeln(`gato: ${gato.cuidados} <br>`);


document.writeln(`<br>=========================`);

/* Herencia Sublases y Métodos */

class Deportistas {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }   
}

class Futbolista extends Deportistas {
    constructor(nombre,apellido,goles){
        super(nombre, apellido);
        this._goles = goles;
    }

    get goles(){
        return this._goles;
    }
    set goles(newGoals){
        this._goles = newGoals;
    }

}

let futbolista2 = new Futbolista(`lionel`,`Messi`,5);

document.writeln("nombre: ", futbolista2.nombre, "<br>");
document.writeln("Apellido: ", futbolista2.apellido, "<br>");
document.writeln("Goles: ", futbolista2.goles, "<br>");
