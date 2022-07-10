console.log(window)
console.log(document)
console.log(location)

document.querySelector("form") //access from
document.querySelectorAll("form") //this will give all the forms as a NodeList
document.getElementById("login-form")
const form1 = document.getElementsByTagName("form") //this will give a HTMLCollection

console.log(form1[0]) //access the first form
console.log(form1[0][0]) //access the first input field of the first form using key
console.log(form1[0]["fName"]) //access the first input field of the first form using name
console.log(form1[0][0].value) //access the value of first input field of the first form 

const form2 = document.forms[0] //storing the first form reference in a variable
const elements = form2.elements //returns the itertable form elements collection

for(var i=0; i<form2.elements.length; i++){
    const element = form2.elements[i]
    const fieldName = element.name
    const value = element.value

    console.group("Element ", fieldName)
    console.log("Value ", value)
    console.groupEnd()
}

const form3 = document.forms[0]
const form3Data = new FormData(form3) //creating a new FormData object from the FormData class and return the iterable FormData {}
form3Data.entries() //returns the Iterator {}

let formValuesArr = []
let formValuesObj = {}

for(let pair of form3Data.entries()){
    formValuesArr.push(pair)
    formValuesObj[pair[0]] = pair[1]
}

console.log(formValuesObj)

// formValuesObj.pair = pair[1] //Why this object has only last key and value
// formValuesObj.pair[0] = pair[1] //Why below error

// Uncaught TypeError: Cannot set properties of undefined (setting '0')
//     at index.js:41:27


/**
 * Notes
 * __________________________
 * 
 * Object / Array / Number / String / Boolean
 * these all classes because all are start with capitalize letters
 * 
 * form[] <- key name
 * - position values
 * - name values
 * 
 * Primitive Data types
 * __________________________
 * 
 *  - String
 *  - Number
 *  - Boolean
 * 
 * Non-Primitive Data Types (every non-primitive data types derived from object class)
 * __________________________
 * 
 * - Array
 * - Object
 * 
 * arr = [1, 2, 3, 4, 5]
 * Object.prototype.toString.call(arr)
 * '[object Array]'
 */
