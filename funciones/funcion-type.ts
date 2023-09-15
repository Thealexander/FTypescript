(() => {

    const addNumber = (a: number, b: number) => a + b;
    const greet = (a: string) => `Hola ${a}`;
    const SaveTheWorld = () => `El mundo esta a salvo`;

    let myFunction: Function;
    //let myFunction: (y: number, x: number) => number);
    //let myFunction: (y: string) => string);
    //let myFunction: () => string);
    //myFunction = 10;
    //console.log(myFunction);

    myFunction = addNumber
    console.log(myFunction(1, 2))
        ;
    myFunction = greet
    console.log(myFunction('baba'))
        ;
    myFunction = SaveTheWorld
    console.log(myFunction());
})()