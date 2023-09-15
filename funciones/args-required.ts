(() => {

    const fullName = (firstname: string, lastname: string): string => {
        return `${firstname} ${lastname}`;
    }

    const name = fullName('Alex', 'Balex');
    console.log({ name });

})()