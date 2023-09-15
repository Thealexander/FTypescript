(() => {
    class Apocalipsis {

        static intance: Apocalipsis;

        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis(
                    'Soy Apocalipsis'
                );
            }
            return Apocalipsis.intance;
        }
        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Magneto');
    //const apocalipsis = new Apocalipsis('conchadetumadre')

    //  console.log(apocalipsis)


})()