(() => {
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    }
    flash = {
        name: 'Klark Kent',
        //  age: 60,
        powers: ['Super Fuerza'],
        getName() {
            return this.name;
        }
    }
})()