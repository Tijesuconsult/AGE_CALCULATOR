let form = document.getElementById('form')
let name = document.getElementById('name')
let dateOfBirth = document.getElementById('dateOfBirth')

let ageDisplay = document.getElementById('ageDisplay')
let nameDisplay = document.getElementById('nameDisplay')

let nameErr = document.getElementById('nameErr')
let ageErr = document.getElementById('ageErr')

let hello = document.getElementById('hello')
let you = document.getElementById('you')
let year = document.getElementById('year')

let allcal = document.getElementById('allcal')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(name.value == "" || name.value == null){
        nameErr.innerHTML = "Name is Required"
        name.style.border = "2px solid red"
        allcal.style.outlineColor = "red"
    }
    // else if(name.value !== "" || name.value !== null){
    //     name.style.border = "2px solid green"
    // }
    if(dateOfBirth.value == "" || dateOfBirth.value == null){
        ageErr.innerHTML = "Date Of Birth is Required"
        dateOfBirth.style.border = "2px solid red"
        allcal.style.outlineColor = "red"
    }
    // else if(dateOfBirth.value.startsWith('2')){
    //     year.innerHTML = "Years Old"
    // }
    // else if(dateOfBirth.value !== "" || dateOfBirth.value !== null){
    //        dateOfBirth.style.border = "2px solid green"   
    // }
    else{
    allcal.style.outlineColor = "green"
    name.style.border = "2px solid green"
    dateOfBirth.style.border = "2px solid green"
    nameDisplay.innerHTML = name.value
    let dob = new Date(dateOfBirth.value)
    let today = new Date()
    let age = today.getFullYear() - dob.getFullYear()
    ageDisplay.innerHTML = age
    nameErr.style.display = "none"
    ageErr.style.display = "none"
    hello.style.display = 'block'
    you.style.display = "block"
    year.style.display = "block"
    }
   
})