
const mostrarPropiedad = (data) => {

return 'hola';
};
//Mostrando pokemones
let arrayPokemon = POKEMON.pokemon;
const containerList = document.getElementById('container-list');

const crearTemplateDeCard = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((personaje) => {
    // creamos un template(string) por cada elemento del array
    const card = `
            <div class="card-link">

            <label class="post-category">${ personaje.id }</label>
            <label class="post-title">${ personaje.name }</label>
            <img class="post-image" src="${ personaje.img }" />
            <label class="post-description">
              average spawn ${ personaje.avg_spawns}</label>
            <label class="post-author">weaknesses ${ personaje.weaknesses }</label>
            </div>
    `;
    // vamos concatenando cada li
    templateListOfCards += card;
  })
  containerList.innerHTML = templateListOfCards;
}

// ejecuntado funciona para pintar la data en mi html
crearTemplateDeCard(POKEMON.pokemon)

//Objeto
window.pokemon = {
  mostrarPropiedad,
};
