// Convert an object into table

export class Demo2 {
    constructor() {
        const obj = [
            { id: 3423, name: 'Bengaluru', officialLanguage: 'Kannada' },
            { id: 4945, name: 'Hyderabad', officialLanguage: 'Telugu' },
            { id: 6434, name: 'Chennai', officialLanguage: 'Tamil' }
        ];
        console.table(obj);
    }
}