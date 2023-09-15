(() => {

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumberFunction: addTwoNumbers;

    addNumberFunction = (a: Number, b: Number) => {
        return 10;
    }

})()