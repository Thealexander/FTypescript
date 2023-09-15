(() => {
    type hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | hero) = 'Alexadnert';
    console.log(typeof myCustomVariable);

    myCustomVariable = 27;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Alex',
        age: 30,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
})()