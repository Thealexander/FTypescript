(() => {

    interface hero {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;

    }
    let flash: hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'viajar en el tiempo']
    }
    let batman: hero = {
        name: 'lala lolo',
        age: 23,
        powers: ['Super velocidad', 'viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    batman.name


})()