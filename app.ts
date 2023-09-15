// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}


// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

// utilizando propiedades opcionales

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CdGoticaFn {
  (ciudadanos: string[]): number
}


const ciudadGotica: CdGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface PersonaIn {
  nombre: string;
  edad: number;
  sexo: boolean;
  estadoCivil: boolean;
  imprimirBio(): void
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaIn {
  nombre: string;
  estadoCivil: boolean;
  sexo: boolean;
  edad: number;

  imprimirBio(): void {

  }


}