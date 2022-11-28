// let x = 'Apple, Banana, Kiwi'
// 	// Find index (position)
//         console.log(x.indexOf('B'))
//             // 7

//     // Replace all 'a':
//         console.log(x.replaceAll('a','---'))
//             // Apple, B---n---n---, Kiwi

//     // Template String (aka. (f'string') in python)
//         console.log(`Your fruits are: ${5 * 3}`)
//             // Your fruits are: 15

//     // Calculate floats:
//         console.log( 3 / 2)
//             // 1.5
        
//     // Round integer down:
//         console.log(Math.floor(3 / 2))
//             // 1

//     // Modular:
//         console.log( 5 % 3)
//             // 2

//     // Show only 3 integers:
//         console.log((0.1 + 0.2).toFixed(3))
//         console.log((0.1 + 0.2).toPrecision(3))
//             // 0.300

//         // Though less precise..

//         // Rounded version of pi:
//         console.log(Math.PI.toFixed(4))
//             // 3.1416

// // INCREMENTS
// let x = 5
//     // Increment by 1 (x += 1)
//         console.log(++x) 
//     // Decement by 1 (x -= 1)
//         console.log(--x)

// // TYPE COERCION
//     console.log("123" == 123) // Equivalent but can hide errors
//         // true

//     // Prevent type coercion:
//     console.log("123" === 123)
//         // false

// // DATA TYPE
// // Object (aka. in Python -> fusion of object and dictionary)
//     // Allows dicts in curly brackets
// x = {}
//     console.log(typeof x)

// // Object = Dictionary (python)
// x = { 
//     name: 'Lizette',
//     age: 22
//     } // Keys do not require quotations

//     console.log(x.name)
//         // {name: 'Lizette'}

//     // Equivalent (integers):
//     const field = 'age'
//     console.log(x[field])
//         // 22

// // Array (aka. list in Python):
// const x = [1, 2, 3, 3.14159, true, 'Hello'] // not limited to datatype
//     console.log(x)
//         // [ 1, 2, 3, 3.14159, true, 'Hello' ]

//     // Find index:
//     console.log(x[3])
//         // 3.14159

//     // Find element in array:
//     console.log(x.indexOf(3))
//         // 2

//     // Go to end of array:
//     console.log(x[x.length-1]) // OR console.log(x.includes(99))
//         // Hello

// FUNCTIONS
// Declare a function:
// function add(x, y) {                                    // Python:
//     return x + y                                        // def add (x, y):
// }                                                           // return x + y
//                                                             // print(add(10, 43))
// // Rocket Operator - Arrow Function (implying a function):
// const numbers = [12, 50, 44, 32, 2]

// const add = (x, y) => x + y    // first-class citzen  
//     console.log(add(10, 43))    
//     // 53

// // Iterates through array, executes parameter
// const doubled = numbers.map(x => x * 2)
//     console.log(doubled)  
//         // [ 24, 100, 88, 64, 4 ]

//     // Equivalent: w/ function
//     const doubler = (arr) => arr.map(x => x * 2)
//     console.log(doubler(numbers))
//             // [ 24, 100, 88, 64, 4 ]

// // D-R-Y: Combine Constants
// const Utils = {
//     add: (x, y) => x + y,
//     doubler: (arr) => arr.map(x => x * 2)
// }

//     console.log(Utils.add(10, 43))
//     console.log(Utils.doubler(numbers))
//         // [ 24, 100, 88, 64, 4 ]

// STRUCTURE
const people = ['Matt', 'Glen', 'Mary', 'Kate']

// Destructure part of array
const [, second, third] = people 

console.log(second)
    // Glen
console.log(third)
    // Mary