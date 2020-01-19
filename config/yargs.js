const argvs = require('yargs')
  .command('crear', 'Crear un elemento por hacer', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea por hacer'
    }
  })
  .command('actualizar', 'Actualiza el estado de la tarea', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea por hacer'
    },
    completado: {
      default: false,
      alias: 'c',
      desc: 'Estado actual de la tarea'
    }
  })
  .command('listar', 'Listar las todas las tareas', {
    description: {
      alias: 'l',
      desc: 'Listado de tareas'
    }
  })
  .command('borrar', 'Eliminar una tarea programada', {
    description: {
      demand: true,
      alias: 'd',
      desc: 'Borrar Tarea'
    }
  })
  .help().argv;

module.exports = {
  argvs
};
