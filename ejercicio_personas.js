//agregue este comentario para volver a pushear ya que tengo problemas con el token
const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carla", edad: 30 },
  { nombre: "Jorge", edad: 15 }
];
//funcion que retorna personas mayores de edad.
function personas_mayores(valor){
    const mayores = [];
    for(const persona of valor){
        if(persona.edad >= 18){
            mayores.push(persona);
        }
    }
    return mayores;
}
//funcion que devuelve los nombres de las personas mayores.
function nombres_personas_mayores(valor){
    const solo_nombres = [];
    for(const nombre of valor){
        solo_nombres.push(nombre.nombre);
    }
    for(const nom of solo_nombres){
        console.log(`Nombre: ${nom}`);
    }
}
nombres_personas_mayores(personas_mayores(personas));