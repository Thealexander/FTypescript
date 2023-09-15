(() => {

    type Avenger = {
        name: string,
        weapon: string;

    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'AmorSuite'
    }

    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'escudo'
    }

    const hulk: Avenger = {
        name: 'Hulk',
        weapon: 'power'
    }


    const avengers = [ironman, captainAmerica, hulk];

    for (const avenger of avengers) {
        console.log(avenger)
    }

})()