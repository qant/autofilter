// crear los años
const years = document.createElement("option");
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  document.querySelector("#year").appendChild(option);
}

function get_autos() {
  return [
    {
      marca: "BMW",
      modelo: "Serie 3",
      year: 2012,
      precio: 30000,
      puertas: 4,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "Audi",
      modelo: "A4",
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: "Negro",
      transmision: "automatico"
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      year: 2015,
      precio: 20000,
      puertas: 2,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "Audi",
      modelo: "A6",
      year: 2010,
      precio: 35000,
      puertas: 4,
      color: "Negro",
      transmision: "automatico"
    },
    {
      marca: "BMW",
      modelo: "Serie 5",
      year: 2016,
      precio: 70000,
      puertas: 4,
      color: "Rojo",
      transmision: "automatico"
    },
    {
      marca: "Mercedes Benz",
      modelo: "Clase C",
      year: 2015,
      precio: 25000,
      puertas: 4,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "Chevrolet",
      modelo: "Camaro",
      year: 2018,
      precio: 60000,
      puertas: 2,
      color: "Rojo",
      transmision: "manual"
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      year: 2019,
      precio: 80000,
      puertas: 2,
      color: "Rojo",
      transmision: "manual"
    },
    {
      marca: "Dodge",
      modelo: "Challenger",
      year: 2017,
      precio: 40000,
      puertas: 4,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "Audi",
      modelo: "A3",
      year: 2017,
      precio: 55000,
      puertas: 2,
      color: "Negro",
      transmision: "manual"
    },
    {
      marca: "Dodge",
      modelo: "Challenger",
      year: 2012,
      precio: 25000,
      puertas: 2,
      color: "Rojo",
      transmision: "manual"
    },
    {
      marca: "Mercedes Benz",
      modelo: "Clase C",
      year: 2018,
      precio: 45000,
      puertas: 4,
      color: "Azul",
      transmision: "automatico"
    },
    {
      marca: "BMW",
      modelo: "Serie 5",
      year: 2019,
      precio: 90000,
      puertas: 4,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "Ford",
      modelo: "Mustang",
      year: 2017,
      precio: 60000,
      puertas: 2,
      color: "Negro",
      transmision: "manual"
    },
    {
      marca: "Dodge",
      modelo: "Challenger",
      year: 2015,
      precio: 35000,
      puertas: 2,
      color: "Azul",
      transmision: "automatico"
    },
    {
      marca: "BMW",
      modelo: "Serie 3",
      year: 2018,
      precio: 50000,
      puertas: 4,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "BMW",
      modelo: "Serie 5",
      year: 2017,
      precio: 80000,
      puertas: 4,
      color: "Negro",
      transmision: "automatico"
    },
    {
      marca: "Mercedes Benz",
      modelo: "Clase C",
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: "Blanco",
      transmision: "automatico"
    },
    {
      marca: "Audi",
      modelo: "A4",
      year: 2016,
      precio: 30000,
      puertas: 4,
      color: "Azul",
      transmision: "automatico"
    }
  ];
}

const autos = get_autos();

//const inputs = document.querySelector("form);
const allselects = document.querySelectorAll("select");

let search_data = {
  year: "",
  marca: "",
  color: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: ""
};

let filtered_autos = [];

const color = document.querySelector("#color");
color.addEventListener("input", e => {
  search_data.color = e.target.value;
  filterAutos();
});
const maximo = document.querySelector("#maximo");
maximo.addEventListener("input", e => {
  search_data.maximo = Number(e.target.value);
  filterAutos();
});
const minimo = document.querySelector("#minimo");
minimo.addEventListener("input", e => {
  search_data.minimo = Number(e.target.value);
  filterAutos();
});
const marca = document.querySelector("#marca");
marca.addEventListener("input", e => {
  search_data.marca = e.target.value;
  filterAutos();
});
const year = document.querySelector("#year");
year.addEventListener("input", e => {
  search_data.year = Number(e.target.value);
  filterAutos();
});

function filterAutos() {
  const result = get_autos()
    .filter(filterByColor)
    .filter(filterByMarca)
    .filter(filterByYear)
    .filter(filterByMin)
    .filter(filterByMax);
  console.log(result);
  show_autos(result);
}

function filterByColor(auto) {
  console.log(search_data.color);
  if (search_data.color) {
    return auto.color === search_data.color;
  } else {
    return auto;
  }
}
function filterByMax(auto) {
  if (search_data.maximo) {
    return auto.precio <= search_data.maximo;
  } else {
    return auto;
  }
}
function filterByMin(auto) {
  console.log(search_data.minimo);
  if (search_data.minimo) {
    return auto.precio >= search_data.minimo;
  } else {
    return auto;
  }
}
function filterByMarca(auto) {
  if (search_data.marca) {
    return auto.marca === search_data.marca;
  } else {
    return auto;
  }
}
function filterByYear(auto) {
  if (search_data.year) {
    return auto.year === search_data.year;
  } else {
    return auto;
  }
}

console.log("----------------");

document.addEventListener("DOMContentLoaded", () => {
  show_autos(autos);
});

function show_autos(autos) {
  const result = document.querySelector("#resultado");
  //result.innerHTML = "";
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
  autos.forEach(auto => {
    const auto_p = document.createElement("p");
    auto_p.innerHTML = `
      <p>${auto.marca} <b>${auto.modelo}</b> ${auto.year} <b>${auto.precio}</b> ${auto.color} ${auto.transmision}</p>
      `;
    result.appendChild(auto_p);
  });
}
