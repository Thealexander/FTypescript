"use strict";
var Validations;
(function (Validations) {
    Validations.valText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const valDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.valText('Fert'));
//# sourceMappingURL=main.js.map