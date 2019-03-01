window.pokegoal = {
// Funcion que crea objetos 'newArray' que contienen nombre, id y url
proccessData:  (data) => {
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
    newObj['Caramelos Necesarios'] = item.candy_count ? item.candy_count : "No evoluciona con Caramelos";
    newObj["Huevos"] = item.egg;
    newObj["Probabilidad de que aparezca"] = item.spawn_chance;
    newObj["Promedio de probabilidad"] = item.avg_spawns;
    newObj["Tiempo que tarda en aparecer"] = item.spawn_time;
    newObj["Multiplicadores"] = item.multipliers ? item.multipliers : "No tiene";
    newObj["Debilidad"] = item.weaknesses;
    newObj["Previa Evolución"] = item.prev_evolution ? item.prev_evolution.map(prevEvo => prevEvo.name).join(",") : "No tiene";
    newObj["Siguiente Evolución"] = item.next_evolution ? item.next_evolution.map(nextEvo => nextEvo.name).join(",") : "No tiene";
    return newObj;
  });
  return newArray;
},
//FUNCION QUE FILTRA POR TIPO DE POKEMON
filterType:  (data, type) =>{ 
  const arrayFiltered = data.filter((Tipo, index) => { 
    for (const i in data[index].Tipo){
      if(data[index].Tipo[i] === type) {
        return data[index].Tipo[i] === type;
      }
    }
  });
  return arrayFiltered;
},

// FUNCION QUE ORDENA
orderBy:  (selectedSort, miniData) => {
  
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
},

//Funcion que lanza la Media del numero de Caramelos
computeStats: (data) =>{ 
  let totalCandyCount = 0;
  let numPokeCandyCount = 0;
  for (const i in data){
    if (data[i].candy_count !== undefined){
      totalCandyCount += data[i].candy_count;
      numPokeCandyCount += 1;
    }
  }
  const mediaCandyCount = (totalCandyCount/numPokeCandyCount);
  return (mediaCandyCount);
}
};
