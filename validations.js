const form = document.forms[0]
const formValues = new FormData(form)

const valuesArr = []
const valuesObj = {}

for(let values of formValues.entries()) {
    valuesArr.push(values)
    valuesObj[values[0]] = values[1]
}
console.log(valuesArr)
console.log(valuesObj)

const firstName = form.fName
const lastName = form.lName
const email = form.email
const age = form.age

console.log(firstName, lastName, email, age)

function setError(element, errorMsg) {
    const parentElement = element.parentElement
    const errorDiv = parentElement.querySelector(".error-msg")
    errorDiv.innerHTML = errorMsg
    parentElement.classList.remove("success")
    parentElement.classList.add("error")
}

function setSuccess(element) {
    const parentElement = element.parentElement
    const errorDiv = parentElement.querySelector(".error-msg")
    errorDiv.innerHTML = ""
    parentElement.classList.remove("error")
    parentElement.classList.add("success")
}

function handleFormSubmit(event) {
    event.preventDefault()

    const firstNameValue = firstName.value.trim()

    if(firstNameValue === "") {
        setError(firstName, "User name cannot be empty")
    }
    else {
        setSuccess(firstName, "")
    }
}

document.getElementById("login-form").addEventListener("submit", handleFormSubmit)
