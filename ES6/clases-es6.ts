(() => {
    class Avenger {
        name: string;
        power: number;

        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }


    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(name: string | undefined, power: number | undefined) {
            super(name, power);
            this.flying = true;
        }
    }


    const hulk = new Avenger('HUlk', 9000)
    const falcon = new FlyingAvenger('Falcon', 800);

    console.log(hulk, falcon);


})()