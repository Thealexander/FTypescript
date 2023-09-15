namespace Validations {
    export const valText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    }
    const valDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf()))
            ? false : true;
    }
}


console.log(Validations.valText('Fert'));