const fs = require("fs");

let listToDo = [];

const guardarDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("no se pudo grabar ", err);
  });
};

const cargarDB = () => {
  try {
    listToDo = require("../db/data.json");
  } catch (error) {
    listToDo = [];
  }
};

const crear = descripcion => {
  cargarDB();
  let toDo = {
    descripcion,
    completado: false
  };
  listToDo.push(toDo);
  guardarDB();
};

const getListado = () => {
  cargarDB();
  return listToDo;
};

const actualizar = (desc, completado) => {
  cargarDB();
  let index = listToDo.findIndex(tarea => {
    return tarea.descripcion === desc;
  });
  if (index >= 0) {
    listToDo[index].completado = completado;
    guardarDB();
    return true;
  } else return false;
};

const borrar = desc => {
  cargarDB();
  let nuevoListado = listToDo.filter(tarea => {
    return tarea.descripcion !== desc;
  });
  if (nuevoListado.length !== listToDo.length) {
    listToDo = nuevoListado;
    guardarDB();
    return true;
  } else return false;
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
