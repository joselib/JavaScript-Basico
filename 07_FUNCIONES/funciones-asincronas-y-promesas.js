//funciones asyncronas

function miAsincro() {
    //hace una llamada a una base de datos externa
    //ouede darnos algun error
}


const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);
    //si esta todo correcto
    if (i !== 0) {
        resolve();
    } else {

        reject();
    }
});

miPromesa.then(() => console.log('Todo correcto')).catch(() => console.log('Algo ha ido mal')).finally(() => console.log('Yo me ejecuto siempre'));
