(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {

            console.log('constructor llamado')

        }
        private getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string, realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            console.log('Constructor Xmen llamado')
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('nombre requiere de mas de tres caracteres')

            }

            this.name = name;
        }

        getFullNamedesdeXmen() {

        }
    }

    const lovezno = new Xmen('Wolverine', 'Logan', true);
   // console.log(lovezno);

    lovezno.fullName = 'Alexander';
    //console.log(lovezno.fullName);


})()