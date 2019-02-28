// Funcion que crea TABLA de info de un POKEMON 
const miniData = window.pokegoal.proccessData(POKEMON.pokemon);

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
  };
//DOM PARA FUNCION QUE ORDENA
document.getElementById('btnSort').addEventListener('click', () => {
    const indexSort = document.getElementById ('dropDownSelecter');
    const selectedSort = indexSort[indexSort.selectedIndex].value;
    const arraySort = window.pokegoal.orderBy(selectedSort, miniData);
    showAll(arraySort);
  });

  //DOM PARA FUNCION QUE FILTRA
 document.getElementById('btnFilter').addEventListener('click', () => {
    const indexFilter = document.getElementById ('dropDownSelecterFilter');
    const selectedFilter = indexFilter[indexFilter.selectedIndex].value;
    const arrayFiltered = window.pokegoal.filterType(miniData, selectedFilter);
    showAll(arrayFiltered);
  }); 
  
//DOM para funcion de MEDIA NUM CARAMELOS
const btnCaramel = window.pokegoal.computeStats(POKEMON.pokemon);
const muestraCaramelo = () => {
  document.getElementById('showCaramel').innerHTML = btnCaramel;
};
document.getElementById('avgCandy').addEventListener('click', muestraCaramelo);

//Funcion que Muestra en pantalla Img y nombre de TODOS los pokemon c/su div e informacion
const showAll = (newData) => {
    const container = document.getElementById('pokemones');
    container.innerHTML='';
    for (let i = 0; i < newData.length; i++) { //recorrido del arreglo
      const contentDiv = document.createElement('div');
      const contentLabel = document.createElement('label');
      const contentImage = document.createElement('img');
      
      const num = document.createTextNode(newData[i].numero + ' ');
      const name = document.createTextNode(newData[i].nombre);
      contentLabel.appendChild(num);
      contentLabel.appendChild(name);
      contentDiv.appendChild(contentLabel);
      container.appendChild(contentDiv);
      
      contentImage.src = newData[i].urlImagen;
      contentDiv.appendChild(contentImage);
      container.appendChild(contentDiv);
      contentDiv.addEventListener("click", function () { 
        showInformationOnePokemon(newData[i]);
      });
    }
  };
  showAll(miniData);

/////////////////*HTML y CSS
/* 
function ocultar (){
    document.getElementById('infoPoke').style.display='none';
}

document.getElementById('btnBack').addEventListener('click', ocultar);   */