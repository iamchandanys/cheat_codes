// Create a Unique Id

// export const uid = () => {
//     const head = Date.now().toString(36);
//     const tail = Math.random().toString(36).substring(2);
//     return head + tail;
// }

// export class Demo3 {
//     constructor() {
//         const id = uid();
//     }
// }

class JsTsDemo {

    difBtwForeachAndMap() {
        const anArray = [
            { 'name': 'Jhon', 'age': 26 },
            { 'name': 'David', 'age': 31 }
        ];

        // #FOREACH :: Performs given operation on each element of an array.
        // Returns undefined.
        const resultFE = anArray.forEach((element) => {
            // do something...
            return element;
        });

        console.log(resultFE); // Returns undefined

        // #MAP :: Performs given "transformation" on a "copy" of each element.
        // Returns new array with transformed elements, leaving back original array unchanged.
        const resultMAP = anArray.map((element) => {
            return element.name;
        });

        console.log(resultMAP); // Returns [ 'Jhon', 'David' ]
    }

}

const jsTsDemo = new JsTsDemo();
jsTsDemo.difBtwForeachAndMap();