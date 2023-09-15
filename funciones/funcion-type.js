"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (a) => `Hola ${a}`;
    const SaveTheWorld = () => `El mundo esta a salvo`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('baba'));
    myFunction = SaveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=funcion-type.js.map