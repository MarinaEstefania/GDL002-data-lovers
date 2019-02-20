/* const id = document.getElementById('idpokemon');
id.textContent = (POKEMON.pokemon[0].id); */

/* const num = document.getElementById('idpokemon');
id.textContent = (POKEMON.pokemon[0].num); */

const showInformationOnePokemon = (objPokemon) => {
    console.log(objPokemon);
    const table = document.getElementById('newtable');
    for(const i in objPokemon){
        const fila = document.createElement('tr');
        const columna = document.createElement('td');
        const columna2 = document.createElement('td');
        
        const titulo = document.createTextNode(i);
        const value = document.createTextNode(objPokemon[i]);
        columna.appendChild(titulo);
        columna2.appendChild(value);
        fila.appendChild(columna)
        fila.appendChild(columna2);

        table.appendChild(fila);

    }
}
showInformationOnePokemon(POKEMON.pokemon[0]);
showInformationOnePokemon(POKEMON.pokemon[i]);