(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {
        }
    }
    class Xmen extends Mutante { }
    class Villian extends Mutante { }

    const wolverine = new Xmen('Wolverine', 'logan');
    const paquidermo = new Villian('Paque', 'monmo');


    const printName = (charecter: Mutante) => {

        console.log(charecter.name)

    }

    printName(paquidermo);
})()