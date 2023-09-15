(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;

    }
    interface Address {
        id: number;
        zip: number,
        city: string;
    }
    const client: Client = {
        name: 'Alexander',
        age: 30,
        address: {
            id: 125,
            zip: 42800,
            city: 'masaya'
        },
        getFullAddress(id: string) {
            return this.address.city
        }
    }
    const client2: Client = {
        name: 'alexandra',
        age: 30,
        address: {
            id: 345,
            zip: 3345,
            city: 'Managuya'
        }, getFullAddress(id: string) {
            return this.address.city
        }
    }

})()