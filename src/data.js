// Funcion que crea TABLA de info de un POKEMON 
const showInformationOnePokemon = (objPokemon) => {
  const table = document.getElementById('pokeTable');
  table.innerHTML = '';
  for (const i in objPokemon) {
    if (i == 'urlImagen'){
      continue;
    } 
    if (i == 'id'){
      continue;
    } 
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

// Funcion que crea objetos 'newArray' que contienen nombre, id y url
const proccessData = (data) => {
  const newArray = data.map((item) => {
    const newObj = {};
    newObj['numero'] = item.num;
    newObj["nombre"] = item.name;
    newObj["id"] = item.id;
    newObj["urlImagen"] = item.img;
    newObj["Tipo"] = item.type;
    newObj['Altura'] = item.height;
    newObj['Peso'] = item.weight;
    newObj['Tipo de Caramelo'] = item.candy;
    newObj['Caramelos Necesarios'] = item.candy_count;
    newObj["Huevos"] = item.egg;
    newObj["Probabolodad de que aparezca"] = item.spawn_chance;
    newObj["Promedio de probabilidad"] = item.avg_spawns;
    newObj["Tiempo que tarda en aparecer"] = item.spawn_time;
    newObj["Multiplicadores"] = item.multipliers;
    newObj["Debilidad"] = item.weaknesses;
    newObj["Previa Evolución"] = item.prev_evolution;
    newObj["Siguiente Evolución"] = item.next_evolution;
    //console.log(newObj);
    return newObj
  })
  return newArray;
};
const miniData = proccessData(POKEMON.pokemon);

// FUNCION QUE ORDENA
const orderBy = (selectedSort, miniData) => {
  if (selectedSort == 1){
    return miniData.sort(function (prev, next){
      if (prev.id > next.id){
        return 1;
      }
      if (prev.id < next.id){
        return -1;
      }
      return 0;
    });
  }else if(selectedSort == 2){
    return miniData.sort(function (prev, next){
      if (prev.id < next.id){
        return 1;
      }
      if (prev.id > next.id){
        return -1;
      }
      return 0;
    });
  }else if(selectedSort == 3){
    return miniData.sort(function (prev, next){
      if (prev.nombre > next.nombre){
        return 1;
      }
      if (prev.nombre < next.nombre){
        return -1;
      }
      return 0;
    });
  } else if (selectedSort==4){
    return miniData.sort(function (prev, next){
      if (prev.nombre < next.nombre){
        return 1;
      }
      if (prev.nombre > next.nombre){
        return -1;
      }
      return 0;
    });
  }
}
//DOM PARA FUNCION QUE ORDENA
document.getElementById('btnSort').addEventListener('click', () => {
  const indexSort = document.getElementById ('dropDownSelecter');
  const selectedSort = indexSort[indexSort.selectedIndex].value;
  const arraySort = orderBy(selectedSort, miniData);
  showAll(arraySort);
});

//FUNCION QUE FILTRA POR TIPO DE POKEMON
const filterType = (data, type) =>{ 
  const arrayFiltered = data.filter((Tipo, index) => { 
    for (const i in data[index].Tipo){
      if(data[index].Tipo[i] === type) {
        return data[index].Tipo[i] === type;
      }
    }
  })
  return arrayFiltered
};

//DOM PARA FUNCION QUE FILTRA
 document.getElementById('btnFilter').addEventListener('click', () => {
  const indexFilter = document.getElementById ('dropDownSelecterFilter');
  const selectedFilter = indexFilter[indexFilter.selectedIndex].value;
  const arrayFiltered = filterType(miniData, selectedFilter);
  showAll(arrayFiltered);
}); 

//Funcion que lanza Estadisticas
/* const filterType = (data, type) =>{ //ok
  const arrayFiltered = data.filter ((tipo) => { //ok
    const arraySelected = tipo.type.forEach(function(position){
      console.log(position);
      if (position == type){
        //console.log('hola');
        //return tipo.type
      }
      //position==type;
    });
    return arraySelected 
    }) //ok
    console.log(arrayFiltered) //ok
  return arrayFiltered; //ok
};
const type = "Flying";//VARIABLE TIPO
filterType(POKEMON.pokemon, type);
 */

//Funcion que Muestra en pantalla Img y nombre de TODOS los pokemon c/su div e informacion
  const showAll = (newData) => {
    const container = document.getElementById('pokemones');
    container.innerHTML='';
    for (let i = 0; i < newData.length; i++) { //recorrido del arreglo
      const contentDiv = document.createElement('div');
      const contentLabel = document.createElement('label');
      const contentImage = document.createElement('img');
      
      const num = document.createTextNode(newData[i].numero + ' ')
      const name = document.createTextNode(newData[i].nombre);
      contentLabel.appendChild(num);
      contentLabel.appendChild(name);
      contentDiv.appendChild(contentLabel);
      container.appendChild(contentDiv);
      
      contentImage.src = newData[i].urlImagen;
      contentDiv.appendChild(contentImage);
      container.appendChild(contentDiv);
      contentDiv.addEventListener("click", function (event) { showInformationOnePokemon(miniData[i]) });
    }
  }
  
  showAll(miniData);
 
  
  
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
  