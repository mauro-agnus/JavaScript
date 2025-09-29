const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carla", edad: 30 },
  { nombre: "Jorge", edad: 15 }
];
const personas_mayores = [];
for ( const persona of personas ) {
    if ( persona.edad > 17 ) {
        personas_mayores.push(persona.nombre);
    }  
}
const expresion = `Las personas mayores de este grupo son ${personas_mayores} `;

console.log(expresion);