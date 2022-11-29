``` javascript
let x = 'Apple, Banana, Kiwi'
	// Find index (position)
        console.log(x.indexOf('B'))
            // 7

    // Replace all 'a':
        console.log(x.replaceAll('a','---'))
            // Apple, B---n---n---, Kiwi

    // Template String (aka. (f'string') in python)
        console.log(`Your fruits are: ${5 * 3}`)
            // Your fruits are: 15

    // Calculate floats:
        console.log( 3 / 2)
            // 1.5
        
    // Round integer down:
        console.log(Math.floor(3 / 2))
            // 1

    // Modular:
        console.log( 5 % 3)
            // 2

    // Show only 3 integers:
        console.log((0.1 + 0.2).toFixed(3))
        console.log((0.1 + 0.2).toPrecision(3))
            // 0.300

        // Though less precise..

        // Rounded version of pi:
        console.log(Math.PI.toFixed(4))
            // 3.1416

// INCREMENTS ---------------------------------------------------------------------------------------------------------
let x = 5
    // Increment by 1 (x += 1)
        console.log(++x) 
    // Decement by 1 (x -= 1)
        console.log(--x)

// TYPE COERCION ------------------------------------------------------------------------------------------------------
    console.log("123" == 123) // Equivalent but can hide errors
        // true

    // Prevent type coercion:
    console.log("123" === 123)
        // false

// DATA TYPE ----------------------------------------------------------------------------------------------------------
// Object (aka. in Python -> fusion of object and dictionary)
    // Allows dicts in curly brackets
x = {}
    console.log(typeof x)

// Object = Dictionary (python)
x = { 
    name: 'Lizette',
    age: 22
    } // Keys do not require quotations

    console.log(x.name)
        // {name: 'Lizette'}

    // Equivalent (integers):
    const field = 'age'
    console.log(x[field])
        // 22

// ARRAY (aka. list in Python): --------------------------------------------------------------------------------------
const x = [1, 2, 3, 3.14159, true, 'Hello'] // not limited to datatype
    console.log(x)
        // [ 1, 2, 3, 3.14159, true, 'Hello' ]

    // Find index:
    console.log(x[3])
        // 3.14159

    // Find element in array:
    console.log(x.indexOf(3))
        // 2

    // Go to end of array:
    console.log(x[x.length-1]) // OR console.log(x.includes(99))
        // Hello

// FUNCTIONS ---------------------------------------------------------------------------------------------------------
Declare a function:
function add(x, y) {                                    // Python:
    return x + y                                        // def add (x, y):
}                                                           // return x + y
                                                            // print(add(10, 43))
// Rocket Operator - Arrow Function (implying a function):
const numbers = [12, 50, 44, 32, 2]

const add = (x, y) => x + y    // first-class citzen  
    console.log(add(10, 43))    
    // 53

// Iterates through array, executes parameter
const doubled = numbers.map(x => x * 2)
    console.log(doubled)  
        // [ 24, 100, 88, 64, 4 ]

    // Equivalent: w/ function
    const doubler = (arr) => arr.map(x => x * 2)
    console.log(doubler(numbers))
            // [ 24, 100, 88, 64, 4 ]

// D-R-Y: Combine Constants
const Utils = {
    add: (x, y) => x + y,
    doubler: (arr) => arr.map(x => x * 2)
}

    console.log(Utils.add(10, 43))
    console.log(Utils.doubler(numbers))
        // [ 24, 100, 88, 64, 4 ]
        
// STRUCTURE ---------------------------------------------------------------------------------------------------------
const people = ['Matt', 'Glen', 'Mary', 'Kate']

// Destructure part of array
const [, second, third, ...others] = people 

console.log(second)
    // Glen
console.log(third)
    // Mary
console.log(others)
    // [ 'Kate' ]   <- 'Matt' excluded due to placeholder (comma)
    
// Combine arrays into a single array:
const bobBirds = ['Robin', 'Crow']
const sallyBirds = ['Bluejay', 'Cardinal']

const allBirds = [...bobBirds, ...sallyBirds, 'Pigeon'] // Split into individual elements -> Create new combined array

console.log(allBirds)
    // [ 'Robin', 'Crow', 'Bluejay', 'Cardinal', 'Pigeon' ]
    
// elif (Python) -> else if
const age = 16

if (age >= 18) {                        // Python:
    console.log('Adult')                // if age >= 18:
} else if (age >= 13) {                     // Python:
    console.log('Teen')
} else {
    console.log('Child')
}

// TERNARY OPERATOR (`?`) --------------------------------------------------------------------------------------------
// Python: allowed = 'Allowed' if age >= 18 else 'Not Allowed!'
const allowed = age >= 18 ? 'Allowed' : 'Not Allowed'

// CASE STATEMENT / LOOPS --------------------------------------------------------------------------------------------

// Fallthrough:
const fav_bird = 'Pigeon'
                                                                
switch (fav_bird) {                                     // Python:
    case 'Raven': // no body, falls through             // match name:
    case 'Crow':                                            // case 'Lizette', 'Matthew':
        console.log('You like crows!')                          // pass
        break // `break` to stop fallthrough                // case 'John':
    case 'Robin':                                               // pass
        console.log('You like robins!')
        break
    default: // else (Python)
        console.log('I don\'t know that bird!')
}

// `while` loop:
let count = 3

while (count > 0) {
    console.log(count--)
}
    // 3
    // 2
    // 1

// 3-Part `for` loop: / for i in range (Python):
for (let i = 0; i < 10; i += 2) { //('initialiser'; 'boolean'; 'after') i = iterations
    console.log(i)
}
    // 0
    // 2
    // 4
    // 6
    // 8
    
// for {} in range:
const favFoods = ['pizza', 'pasta', 'tacos']

for (let food of favFoods) { // Python: for food in favFoods:
    console.log(food) // use `in` over `of` for index
}
    // pizza
    // pasta
    // tacos

// Index and Value (enumerate) ----------------------------------------------------------------------------------------
// Python: for index, food in enumerate(favFoods):
for (let index in favFoods) {
    console.log(`${parseInt(index) + 1}. ${favFoods[index]}`)
}
    // 1. pizza
    // 2. pasta
    // 3. tacos

// SEMANTIC: .forEach (best practice) > for in/of:
favFoods.forEach((food, index) => console.log(`${index + 1}. ${food}`))

// INTERATORS: Map and Filter ------------------------------------------------------------------------------------------

// MAP: Itirates over array, calls function for each array -> New Array (map)

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

const squared = arr.map((x) => x ** 2) // single parameter

// FILTER: Itirates over array, calls function for each array -> Return a boolean -> if True, element is added into new array (with changes)
const evens = arr.filter(x => x % 2 === 0)

    console.log(squared) // returns new array
        // [1,  4,  9, 16, 25,  36, 49, 64, 81]
        
    console.log(arr) // original array
        // [1, 2, 3, 4, 5,  6, 7, 8, 9]
```