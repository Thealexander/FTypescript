(() => {
    const batman: string = 'Batman';
    const linter: string = `otra manera`;


    console.log(`Im ${batman}`);

    console.log(batman[10]?.toLocaleUpperCase() || 'No ta');

})()