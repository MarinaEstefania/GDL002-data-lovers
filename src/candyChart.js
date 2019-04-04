const proneToEvolvePokemons = pokemons => {
  return [...pokemons.filter(pokemon => pokemon['candy_count'])];
};

const average = nums => {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};

const averageByPokemonType = (proneToEvolvePokemons, pokemonsType) => {
  let pokemonTypeAverage = {};

  pokemonsType.forEach(type => {
    pokemonTypeAverage[type] = proneToEvolvePokemons
      .filter(pokemon => pokemon.type.includes(type))
      .map(pokemon => pokemon.candy_count);
  });

  for (let pokemonType in pokemonTypeAverage) {
    if (average(pokemonTypeAverage[pokemonType])) {
      pokemonTypeAverage[pokemonType] = average(pokemonTypeAverage[pokemonType]);
    }
  }

  return pokemonTypeAverage;
};

const dataForChart = pokemon => {
  const arrayToReturn = [['Tipo', 'Media Aritmetica Caramelos']];
  const averageByPokemon = averageByPokemonType(
    proneToEvolvePokemons(pokemon),
    calculatePokemonTypes(pokemon),
  );

  for (let averageName in averageByPokemon) {
    if (!Array.isArray(averageByPokemon[averageName])) {
      arrayToReturn.push([averageName, averageByPokemon[averageName]]);
    }
  }

  return arrayToReturn;
};
//Grafica Caramelos

function drawCandyChart () {
  
  // Promedio de los caramelos de Pokemon q sí evolucionan por tipo
  var data = google.visualization.arrayToDataTable(dataForChart(POKEMON.pokemon));

  var options = {
    title: 'Media aritmética de caramelos necesarios por tipo de Pokemon',
    width: 900,
    height: 500,
        hAxis: {
          title: 'Promedio de Caramelos',
          minValue: 0
        },
        vAxis: {
          title: 'Tipo de Pokemon'
        }
      };
  

      var chart = new google.visualization.BarChart(document.getElementById('chart'));

  chart.draw(data, options);
};

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawCandyChart);
