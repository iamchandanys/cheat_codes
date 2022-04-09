// Assign a local object to the Observable field and subscribe
// using 'of' from rxjs

import { Observable, of } from "rxjs";

export class Demo1 {
    public dataSource = new Observable<any>();

    constructor() {
        this.setData();
    }

    public setData() {
        const obj = { name: 'xyz' };
        this.dataSource = of(obj);
    }

    public getData() {
        this.dataSource.subscribe(
            (data) => { console.log(data); }
        );
    }
}