const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
    return listadoPorHacer;
  } catch (err) {
    listadoPorHacer = [];
    return listadoPorHacer;
  }
};

const guardarDb = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('./db/data.json', data, err => {
    if (err) throw err;
    console.log('Se guardo en la base de datos correctamente');
  });
};

const crear = descripcion => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  guardarDb();
  return porHacer;
};
const getListado = () => {
  return cargarDB();
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(
    task => task.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDb();
  } else {
    console.log('No tiene ingresado una tarea con esas descripción');
  }
};
const borrar = descripcion => {
  cargarDB();
  let index = listadoPorHacer.findIndex(
    task => task.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardarDb();
  } else {
    console.log('No tiene ingresado una tarea con esas descripción');
  }
};
module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
