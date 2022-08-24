function* generaId() {
    let id = 0;
    while (true) {
        id++;
        if (id === 10) {
            return id;
        }
        yield id; // yield espera a que se vuelva a llamar
    }
}

const generadorId = generaId();
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);
console.log(generadorId.next().value);