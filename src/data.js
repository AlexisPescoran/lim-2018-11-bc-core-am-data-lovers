const mostrarPropiedad = (data) => {
  let arrayMostrar = [];
  for (let i = 0; i < data.length; i++) {
    arrayMostrar.push({name: data[i].name, img: data[i].img});
  }
  return arrayMostrar;
};

const filtrarPropiedad = (data, tipo) => {
  let arrayFiltrar = [];
  arrayFiltrar = data
    .filter((ele) => {
      for (let i = 0 ; i < ele.type.length ; i++) {
        if (ele.type[i] === tipo) {
          return 1;
        }
      }
    });
  return arrayFiltrar;
};

const ordenarPropiedad = (data, tipo) => {
  let arrayOrdenar = [];
  for (let i = 0 ; i < data.length ; i++) {
    arrayOrdenar.push({name: data[i].name, img: data[i].img});
  }
  arrayOrdenar.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });
  if (tipo === 'Az'){
    return arrayOrdenar;
  }
  if (tipo === 'Za'){
    return arrayOrdenar.reverse();
  }
};

const calcularPropiedad = (data, tipo) => {
  let cantidad = 0;
  data.filter((ele) => {
    if (ele.egg === tipo) {
      cantidad ++;
      return 1;
    }
  });
  return cantidad;
};

window.pokemon = {
  mostrarPropiedad,
  filtrarPropiedad,
  ordenarPropiedad,
  calcularPropiedad,
};
