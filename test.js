var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// const arr1 = fruits.toString()
// console.log(arr1);

// const arr2 = fruits.join("-");
// fruits.pop()
// console.log(fruits);

// fruits.push("kiwi")
// console.log(fruits);

// fruits.shift();
// console.log(fruits);
// fruits.unshift("monoose", "peru");
// console.log(fruits);

// delete fruits[0];

// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// var contact = fruits.concat(fruits2);

// console.log(contact);

// const rev = contact.reverse();
// console.log(rev);

// const sort = fruits2.sort()
// console.log(sort.reverse());

// const val = [11, 12, 9, 8, 55, 44, 0, 22, 44, 33, 77];
// const a = val.sort(function (a, b) {
//     return (a - b)

// })
// console.log(a);

var fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi", "peru"];
// const f =
// fruits.splice(2, 1, 4, 4, 4)
// console.log(fruits);


// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// fruits.forEach((ele, i, arr) => {
//     console.log(ele + "  " + i, arr);
// })
// const a = fruits.map((ele, i) => {
//     return ele.charAt(0).toLocaleUpperCase()
// })
// console.log(a);

const filt = [10, 20, 3, 40, 50, 60, 70]

// const filter = filt.filter((ele, i) => {
//     const max = ele > 40
//     return max
// })
// console.log(filter);


// const reduce = filt.reduce((total = 110, ele, i) => {
//     // console.log();
//     console.log(total);
//     return total + el

// })
// // console.log(reduce);

// const some = filt.some((ele, i) => {
//     return ele <= 3
// })
// console.log(some);
// console.log(10 < 20);
// const include = filt.includes(120)
// console.log(include);

// function arr(a = 100) {
//     console.log(a);
// }
// arr(200)

// function add(a, b) {
//     console.log(arguments);
//     console.log("Total args: ", arguments.length);
//     console.log("Callee : ", arguments.callee.name);
//     console.log("Caller : ", arguments.callee.caller.name);
//     return a + b;
// }
// add("a", "b")
// const object1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const keys = Object.entries(object1)
// console.log(keys);


const person = {
    name: "Topper Skills",
    mobile: "7875580668",
    email: "topperskills@gmail.com",
    city: {
        name: "Topper Skills",
        mobile: "7875580668",
        email: "topperskills@gmail.com",
        city: "Pune",
    }
}
const keys2 = Object.keys(person)
// console.log(keys2);

const val = Object.values(person)
console.log(Object.keys(val[3]));


// const entries = Object.entries(person)
// console.log(entries[0][0]);


db.createUser(
    {
        user: "userAdmin",
        pwd: "topper123",
        roles: [
            { role: "userAdminAnyDatabase", db: "admin" },
            { role: "readWriteAnyDatabase", db: "admin" }
        ]
    }
)