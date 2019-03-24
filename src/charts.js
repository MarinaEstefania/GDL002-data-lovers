const calculateAllPokemonTypes = pokemons => {
  let allTheTypes = [];
  pokemons.forEach(pokemon => {
    allTheTypes.push(...pokemon.type);
  });
  //console.log(allTheTypes);
  return allTheTypes;
};

const calculatePokemonTypes = pokemons => {  //15 TIPOS DE POKEMON
  let allTheTypes = [];
  pokemons.forEach(pokemon => {
    allTheTypes.push(...pokemon.type);
  });
  let notRepeatedTypes = [];
  allTheTypes.forEach(type => {
    if (!notRepeatedTypes.includes(type)) {
      notRepeatedTypes.push(type);
    }
  });
  console.log(notRepeatedTypes)
  return notRepeatedTypes;
};

calculateAllPokemonTypes(POKEMON.pokemon);

/*  const getRandomNumber = top => {
  return Math.floor(Math.random() * top);
};

const rgbGenerator = () => {
  return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`;
};

const calculateBackground = () => {
  let typeCount = calculatePokemonTypes(POKEMON.pokemon).length;
  return [...Array(typeCount)].map(() => {
    return rgbGenerator();
  });
}; */

const pokemonByTypeCount = pokemons => { //cantidad de POKEMON por tipo
  let allTheTypes = calculateAllPokemonTypes(pokemons);
  let pokemonTypes = calculatePokemonTypes(pokemons);

  return pokemonTypes.map(pokemonType => {
    let toReturn = _.countBy(allTheTypes, element => element === pokemonType).true;
    return toReturn;
  });
};
console.log(pokemonByTypeCount(POKEMON.pokemon))

const arrayForCharType = (tipo, cantidad) =>{
  const array = []
  
  return array
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Tipo', 'Cantidad'],
    ['Fuego',12],
    ['Volador',19],
    ['Dragon', 3],
    ['Planta', 14],
    ['Veneno',33],
    ['Agua', 32],
    ['Hielo', 5],
    ['Insecto',12],
    ['Fantasma', 3],
    ['Normal',24],
    ['Electrico',9],
    ['Tierra', 14],
    ['Pelea',8],
    ['Psiquico',14],
    ['Roca',11]
  ]);

  var options = {
    title: 'Porcentaje por tipo de Pokemon',
    'width':900,
    'height':500
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
