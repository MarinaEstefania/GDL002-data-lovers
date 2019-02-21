const proccessData = (data) => { //funcion que crea un nuevo arreglo 'newArray' que contiene nombre, id y url
  const newArray = data.map((item)=> {
    const newObj = {};
    newObj["nombre"] = item.name;
    newObj["id"] = item.id;
    newObj["urlImagen"] = item.img;
    //console.log(newObj);
    return newObj
  })
  return newArray;
};
//console.log();

const showAll = (newData) => {
  //console.log(newData);
  const container = document.getElementById('pokemones');
  //console.log(container);
  
  for (let i = 0; i< newData.length; i++) { //recorrido del arreglo
    const contentDiv = document.createElement('div');
    const contentLabel = document.createElement('label');
    const contentImage = document.createElement('img');
    
    const t = document.createTextNode(newData[i].nombre);
    contentLabel.appendChild(t);
    contentDiv.appendChild(contentLabel);
    container.appendChild(contentDiv);
    
    contentImage.src = newData[i].urlImagen;
    contentDiv.appendChild(contentImage);
    container.appendChild(contentDiv); 
    }
  }

const miniData = proccessData(POKEMON.pokemon);
showAll(miniData);








/* let i=0
let pokeInfo = (i) => {
let pokeArray = (Object.entries(POKEMON.pokemon[i]));
return (pokeArray);
}; */

/* const miniData = [
  { 
    name:"Janeth", 
    edad:27
  },
  {
    name:"Fanny", 
    edad: 28
  }
]; */

/* const showAll = (data) =>{// Funcion que permite mostrar a todas las imagenes pokemon
  const newImage = document.createElement("img");
 */
  //myImage.src='http://www.serebii.net/pokemongo/pokemon/004.png';
  //myImage.appendChild(myImage);  
 /*  return hijo;
}
document.getElementById('pokemons').appendChild(showAll(miniData))

const pokeSelectedFunction = (pokeSelected) => {//funcion que permite seleccionar el pokemon deseado
}
 */
/* const showInformationOnePokemon = (objPokemon) =>{ //objPokemon: deberia ser un objeto2
  const table = document.getElementById('pokeTable');
  for (const i in objPokemon){
      const fila = document.createElement('tr');
      const columna = document.createElement('td');
      const columna2 = document.createElement('td');

      const titulo = document.createTextNode(i);
      const value = document.createTextNode(objPokemon[i]);
      columna.appendChild(titulo);
      columna2.appendChild(value);
      fila.appendChild(columna);
      fila.appendChild(columna2);

      table.appendChild(fila);
  }

} */




// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/* AQUI SE ESCRIBIRAN LAS FUNCIONES

    filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

    sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

    computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.


Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).

const n=5;
const example = (n) => {
  const m=n*n;
  return m;
  };
console.log(example(n));

window.example = example;

*/
