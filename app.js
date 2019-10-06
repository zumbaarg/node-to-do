//const argv = require("yargs").argv;

const argv = require("./config/yargs").argv;

const toDo = require("./to-do/to-do");

const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = toDo.crear(argv.descripcion);
    break;

  case "listar":
    let listado = toDo.getListado();

    for (let tarea of listado) {
      console.log("=========TO DO=========".green);
      console.log(tarea.descripcion);
      console.log("Estado", tarea.completado);
      console.log("=======================".green);
    }

    break;

  case "actualizar":
    if (toDo.actualizar(argv.descripcion, argv.completado)) {
      console.log("Actualizado OK".green);
    } else {
      console.log("No se actualizo nada".red);
    }
    break;
  case "borrar":
    if (toDo.borrar(argv.descripcion)) {
      console.log("Borrado OK".green);
    } else {
      console.log("Error en borrado".red);
    }
    break;
  default:
    console.log("comando no reconocido");
    break;
}
