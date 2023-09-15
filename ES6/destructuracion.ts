(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Rodert Junir',
        vision: 'Pauil corfy',
        activo: true,
        poder: 2400.544
    }



    const printAvengers = ({ ironman, ...resto }: Avengers) => {
        console.log(ironman, resto);
    }
    printAvengers(avengers);

    const avengersArray = ['Cap. Amrica', 'ironman', 'hulk'];

    //const ironman = avengersArray[1];
    const [capitan, ironman,] = avengersArray;

    console.log({ ironman });

})()