const calculateAllPokemonTypes = pokemons => {
  let allTheTypes = [];
  pokemons.forEach(pokemon => {
    allTheTypes.push(...pokemon.type);
  });
  return allTheTypes;
};

const calculatePokemonTypes = pokemons => {
  //15 TIPOS DE POKEMON
  let allTheTypes = calculateAllPokemonTypes(pokemons);
  let notRepeatedTypes = [];
  allTheTypes.forEach(type => {
    if (!notRepeatedTypes.includes(type)) {
      notRepeatedTypes.push(type);
    }
  });
  return notRepeatedTypes;
};

const pokemonByTypeCount = pokemons => {
  //cantidad de POKEMON por tipo
  let allTheTypes = calculateAllPokemonTypes(pokemons);
  let pokemonTypes = calculatePokemonTypes(pokemons);

  return pokemonTypes.map(pokemonType => {
    const countObject = allTheTypes.reduce((prev, current) => {
      prev[current] = (prev[current] || 0) + 1;
      return prev;
    }, {});
    return countObject[pokemonType];
  });
};

const arrayForCharType = pokemon => {
  const array = [['Tipo', 'Cantidad']];
  const pokemonsType = calculatePokemonTypes(pokemon);
  const pokemonsCount = pokemonByTypeCount(pokemon);

  pokemonsType.forEach((type, index) => {
    array.push([type, pokemonsCount[index]]);
  });

  return array;
};

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(arrayForCharType(POKEMON.pokemon));

  var options = {
    title: 'Porcentaje por tipo de Pokemon',
    width: 900,
    height: 500,
  };

  // var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  // var chart = new google.visualization.LineChart(document.getElementById('piechart'));
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
