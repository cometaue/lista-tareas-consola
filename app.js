const argv = require('./config/yargs').argvs;
const colors = require('colors');
const ph = require('./pendiente/pendiente');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = ph.crear(argv.description);
    console.log('Agregar una Tarea');
    break;
  case 'listar':
    let lista = ph.getListado();
    let index = 1;
    if (lista.length > 0) {
      for (let task of lista) {
        console.log(`=============Tarea ${index}===============`.green);
        console.log(task.descripcion);
        console.log('Estado', task.completado);
        console.log('===================================\n'.green);
        index++;
      }
    } else {
      console.log(`===========Tareas=================`.green);
      console.log('No existen tareas registradas'.red);

      console.log('===================================\n'.green);
    }

    console.log('Tareas Pendientes');
    break;
  case 'actualizar':
    console.log('Actualizar una tarea');
    ph.actualizar(argv.descripcion);
    break;
  case 'borrar':
    console.log('Borrar una tarea');
    ph.borrar(argv.description);
    break;
  default:
    console.log('Comando no reconocido');
    break;
}
