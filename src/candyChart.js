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
  const arrayToReturn = [['Tipo', 'Caramelos promedio']];
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

const drawCandyChart = () => {
  // Promedio de los caramelos de Pokemon q sí evolucionan por tipo
  const data = google.visualization.arrayToDataTable(dataForChart(POKEMON.pokemon));

  const options = {
    title: 'Porcentaje por tipo de Pokemon',
    width: 900,
    height: 500,
  };

  const chart = new google.visualization.BarChart(document.getElementById('chart'));

  chart.draw(data, options);
};

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCandyChart);
