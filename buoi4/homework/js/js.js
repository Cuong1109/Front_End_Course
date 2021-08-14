//1
let products = [
    {
        id: 1,
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger'
    },
    {
        id: 2,
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone'
    },
    {
        id: 3,
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone'
    },
    {
        id: 4,
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone'
    }
];
//1.1. Print/log name and price of all the products out 
// for (const i of products) {
//     console.log(i.name);
//     console.log(i.price);
//     console.log(`-------------------------------------------`);
// }

//1.2 Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
// for (const i of products) {
//     console.log(`${i.id}.${i.name}`);
//     console.log(i.price);
// }
// let position=Number(prompt("Enter product position?"));
// console.table(products[position]);

//1.3. Write a script printing/logging out the products based on category input by users
// let categoryInput=prompt("Enter category( Charger, Phone,..)");
// for (const i of products) {
//     if (i.category==categoryInput) {
//         console.log(`Name: ${i.name}`);
//         console.log(`Price: ${i.price} `);
//     }
// }

//1.4. Add providers to each product
// let arrProvider=["Phukienzero dientuccc", "tgdd", "tgdd", "tgdd"];
// let j=0;
// for (const i of products) {
//     i.provider=arrProvider[j++];
// }
// for (const i of products) {
//     console.log(`Name: ${i.name}`);  
//     console.log(`Price: ${i.price} `);
//     console.log(`Providers: ${i.provider}`);
//     console.log(`-----------------------------`);
// }

//2
let courses = [
    {
        id: 1,
        name: 'HTML',
        complete: false
    },
    {
        id: 2,
        name: 'CSS',
        complete: false
    },
    {
        id: 3,
        name: 'Javascript',
        complete: false
    },
    {
        id:4,
        name: 'Node Package Manager',
        complete: false
    },
    {
        id: 5,
        name: 'Git',
        complete: false
    },
];
//2.1. Print it out
// console.table(courses);

//2.2. Let users add new task
//2.3. Let users update task
//2.4. Let users complete task
//2.5. Let users delete task
while (1) {
    let isLoop=true;
    let command=prompt("Enter your command(new, delete, update, complete, print)");
    switch (command) {
        case "new":
            let newTask=prompt("Enter new task: ");
            let newCourse={
                id: courses.length+1,
                name: newTask,
                complete: false,
            }
            courses.push(newCourse);
            break;
        case "delete":
            break;
        case "update":
            let newTilte=prompt("Enter your new tilte: ");
            let position=prompt("Enter position: ");
            courses[position].name=newTilte;
            break;
        case "complete":
            let positionComplete=prompt("Enter position: ");
            courses[positionComplete].complete=true;
            break;
        case "print":
            console.table(courses);
            break;
        default:
            isLoop=false;
            break;
    }
    if (!isLoop) break;
}