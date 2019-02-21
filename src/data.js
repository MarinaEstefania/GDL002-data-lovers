
const proccessData = (data) => { //funcion que crea un nuevo arreglo 'newArray' que contiene nombre, id y url
  const newArray = data.map((item)=> {
    const newObj = {};
    newObj["nombre"] = item.name;
    newObj["id"] = item.id;
    newObj["urlImagen"] = item.img;
    return newObj;
  })
  return newArray;
  
};

const showAll = (newData) => { //funcion showAll muestra en pantalla Todos los pokemon con su nombre e imagen
  const container = document.getElementById('pokemones');
  
  for (let i = 0; i< newData.length;i++) {
    const nodeArticule = document.createElement('articule');
    const nodeImagen = document.createElement('img');
    const nodeP = document.createElement('p');
    
    const textN=document.createTextNode(newData[i].nombre);
    nodeP.appendChild(textN);
    nodeArticule.appendChild(nodeP);
    container.appendChild(nodeArticule);

    nodeImagen.src=newData[i].urlImagen;
    nodeArticule.appendChild(nodeImagen);
    container.appendChild(nodeArticule);
  }
}

const miniData = proccessData(POKEMON.pokemon); // crea la variable miniData la cual contiene el arreglo 'newArray' 
showAll(miniData); // llama a la funcion ShowAll



const showInformationOnePokemon = (objPokemon) => { //funcion que muestra toda la informacion del pokemon PAG 2
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
}



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
