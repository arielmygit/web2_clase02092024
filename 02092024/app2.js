let tareas = [];

function mostrarMenu(){
    return (parseInt(prompt(
        `
        Opciones disponibles
        1.- Agregar tarea😁
        2.- Ver todas las tareas
        3.- Marcas mis tareas completadas
        4.- Salir😥
        `
    )));
};


function marcarTareaCompletada(){
    numero = parseInt(prompt("Introduce el numero para marcar la tarea completada: "));
    if(numero > 0 && numero<=tareas.length){
        tareas[-1].completada=true;
        alert(`La tarea ${tareas[numero-1].nombre} ha sido completada`);
    }else{
alert("Numero de tarea no valido (Fuera de rango...)")
    }
}



function agregarTarea(){
    nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        tarea= {
            nombre: nombre,
            completada: false
        };
    tareas.push(tareas);
    alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tera no puede estar vacio");
    }
}

function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");

    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea, index)=>{
            mensaje += `${index+1}.- ${tarea.nombre}[${tarea.completada? "Completada": "Pendiente"}] \n`;
        });
        alert(mensaje);

    }
}


function iniciarPrograma(){
    continuar = true;
    while(continuar){
        opcion = mostrarMenu();
        switch (opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intentar nuevamente");

        }
    }
    alert("Programa finalizado");
}

console.log(iniciarPrograma());