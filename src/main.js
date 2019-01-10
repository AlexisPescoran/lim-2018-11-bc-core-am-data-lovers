const containerList = document.getElementById('container-list');
const tipoPokemon = document.getElementById('tipo-pokemon');
const ordenPokemon = document.getElementById('orden-pokemon');
const tipoHuevo = document.getElementById('tipo-huevo');

const arrayPokemon = POKEMON.pokemon;

const arrayVacio = [];
const arrayMostrado = pokemon.mostrarPropiedad(arrayPokemon);

const crearPlantilla = (data) => {
  let plantilla = '';
  data.forEach((data) => {
    let carta = `
    <div class = "card-link">
    <label class="name">${ data.name }</label>
    <img class="image" src="${ data.img }" />
    </div>
    `;
    plantilla += carta;
  });
  containerList.innerHTML = plantilla;
};
crearPlantilla(arrayMostrado);

const filtrarTipo = () => {
  document.getElementById('cantidad-huevos').innerHTML = '';
  const arrayFiltrado = pokemon.filtrarPropiedad(arrayPokemon, tipoPokemon.value);
  crearPlantilla(arrayFiltrado);
  if (tipoPokemon.value === 'Selected') {
    crearPlantilla(arrayMostrado);
  }
};

const ordenarPokemon = () => {
  document.getElementById('cantidad-huevos').innerHTML = '';
  const arrayOrdenado = pokemon.ordenarPropiedad(arrayPokemon, ordenPokemon.value);
  crearPlantilla(arrayOrdenado);
};

const calcularHuevo = () => {
  crearPlantilla(arrayVacio);
  const cantidadHuevo = pokemon.calcularPropiedad(arrayPokemon, tipoHuevo.value);
  document.getElementById('cantidad-huevos').innerHTML = `La cantidad de pokemon de ${tipoHuevo.value} es ${cantidadHuevo}`;
};
