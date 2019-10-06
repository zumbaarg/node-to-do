const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion tarea por hacer"
};

const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado tarea por hacer"
};

const yargs = require("yargs");

const argv = yargs
  .command("crear", "crear un elemento por hacer", { descripcion })
  .command("actualizar", "crear un elemento por hacer", {
    descripcion,
    completado
  })
  .command("borrar", "borra un elemento de la lista", { descripcion })
  .help().argv;

module.exports = {
  argv
};
