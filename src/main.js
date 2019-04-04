// Funcion que crea TABLA de info de un POKEMON
const miniData = window.pokegoal.proccessData(POKEMON.pokemon);

const showInformationOnePokemon = objPokemon => {
  const table = document.getElementById('pokeTable');
  table.innerHTML = '';
  for (const i in objPokemon) {
    if (i == 'urlImagen') {
      continue;
    }
    if (i == 'id') {
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
};
//DOM PARA FUNCION QUE ORDENA
document.getElementById('dropDownSelecter').addEventListener('click', () => {
  const indexSort = document.getElementById('dropDownSelecter');
  const selectedSort = indexSort[indexSort.selectedIndex].value;
  const arraySort = window.pokegoal.orderBy(selectedSort, miniData);
  showAll(arraySort);
});

//DOM PARA FUNCION QUE FILTRA
document.getElementById('dropDownSelecterFilter').addEventListener('click', () => {
  const indexFilter = document.getElementById('dropDownSelecterFilter');
  const selectedFilter = indexFilter[indexFilter.selectedIndex].value;
  const arrayFiltered = window.pokegoal.filterType(miniData, selectedFilter);
  showAll(arrayFiltered);
});

document.getElementById('showCaramel').innerText = window.pokegoal.computeStats(POKEMON.pokemon);
//Funcion que Muestra en pantalla Img y nombre de TODOS los pokemon c/su div e informacion
const showAll = newData => {
  const container = document.getElementById('pokemones');
  container.innerHTML = '';
  for (let i = 0; i < newData.length; i++) {
    //recorrido del arreglo
    const contentDiv = document.createElement('div');
    const contentLabel = document.createElement('label');
    const contentImage = document.createElement('img');

    const num = document.createTextNode(newData[i].numero + '  ');
    const name = document.createTextNode(newData[i].nombre);
    contentLabel.appendChild(num);
    contentLabel.appendChild(name);
    contentDiv.appendChild(contentLabel);

    contentImage.src = newData[i].urlImagen;
    contentDiv.appendChild(contentImage);
    container.appendChild(contentDiv);
    contentDiv.addEventListener('click', function() {
      showInformationOnePokemon(newData[i]);
      contentDiv.addEventListener('click', pokeInfo());
    });
  }
};

//////////////////////////////////////////////////////HTML y CSS
const entrar = () => {
  document.body.style.backgroundColor = '#f3f3f3';
  document.body.style.backgroundImage = "url('../src/img/dark-bg-pokemon.png')";
  document.getElementById('container').className = 'visible';
  document.getElementById('candySection').className = 'invisible';
  document.getElementById('textCandySection').className = 'invisible';

  showAll(miniData);
};
document.getElementById('btnEnter').addEventListener('click', entrar);

const pokeInfo = () => {
  document.getElementById('candySection').className = 'invisible';
  document.getElementById('container').className = 'invisible';
  document.getElementById('infoPoke').className = 'visible';
  document.getElementById('textCandySection').className = 'invisible';
};

const main = () => {
  document.getElementById('candySection').className = 'invisible';
  document.getElementById('container').className = 'visible';
  document.getElementById('infoPoke').className = 'invisible';
  document.getElementById('chartSection').className = 'invisible';
  document.getElementById('candyChartSection').className = 'invisible';
};

document.getElementById('btnBack').addEventListener('click', main);

const funcChart = () => {
  document.getElementById('container').className = 'invisible';
  document.getElementById('chartSection').className = 'visible';
};

document.getElementById('btnChart').addEventListener('click', funcChart);
document.getElementById('btnChartBack').addEventListener('click', main);

const showCandyChart = () => {
  document.getElementById('container').className = 'invisible';
  document.getElementById('candyChartSection').className = 'visible';
};
// Candy chart event listener
document.querySelector('#chartByCandy').addEventListener('click', showCandyChart);
document.getElementById('btnChartBackCandy').addEventListener('click', main);