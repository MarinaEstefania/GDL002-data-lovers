require('../src/data.js');
const POKEMON = require('../src/data/pokemon/pokemon.json');
const miniData = window.pokegoal.proccessData(POKEMON.pokemon);

//cuando se vea la palabra describe por convencion significa que se trata de un test
describe('processData', () => { //describe es una funcion y la palabra 'Pokemon' es lo que se mostrara en pantalla
  it('should be a function', () => { //it es una funcion y la frase 'should be an object' es lo que se mostrara en pantalla
  //console.log(typeof(window.pokegoal.proccessData));
    expect(typeof window.pokegoal.proccessData).toBe('function');
  });
});

//Funcion filterType
describe('filterType', () => {
  it('should be a function', () => {
    expect(typeof window.pokegoal.filterType).toBe('function');
  });
  it('returns `12 for Fire Pokemon type`', () => {
    expect(window.pokegoal.filterType(miniData, 'Fire').length).toBe(12);
  });
});

// Funcion orderBy
describe('orderBy', () => {
  it('should be a function', () => {
    expect(typeof window.pokegoal.orderBy).toBe('function');
  });
  it('returns `151 for Pokemon orderby opcion 4: Z-A`', () => {
    expect(window.pokegoal.orderBy('4', miniData).length).toEqual(151);
  });
});
    // Funcion computeStats
describe('computeStats', () => {
  it('should be a function', () => {
    expect(typeof window.pokegoal.computeStats).toBe('function');
  });
  it('returns `57.3`', () => {
    console.log('este es computeStats', window.pokegoal.computeStats(POKEMON.pokemon));
    expect(window.pokegoal.computeStats(POKEMON.pokemon)).toBe(57.3);
  });
});







/* //el describe de a continuacion no esta terminado
describe ('Filter', ()=> {
  it ('should filter my Pokemon by name' () => {
    expect (filterPokemon(pokemon, 'nombre')).toBe (
  }
}
  }); 
}); */
 
/* require('../src/data.js');
const pokemon = require ('../src/data/pokemon/pokemon.js');

//cuando se vea la palabra describe por convencion significa que se trata de un test
describe('Pokemon', () => { //describe es una funcion y la palabra 'Pokemon' es lo que se mostrara en pantalla
  it('should be an object', () => { //it es una funcion y la frase 'should be an object' es lo que se mostrara en pantalla
    expect(typeof pokemon).toBe('object');
  });
});



//el describe de a continuacion no esta terminado
describe ('Filter', ()=> {
  it ('should filter my Pokemon by name' () => {
    expect (filterPokemon(pokemon, 'nombre')).toBe (
  }
}
  }); 
});
*/
