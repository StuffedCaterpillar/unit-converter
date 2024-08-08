const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")
inputEl.value = 42

convertBtn.addEventListener("click", function(){
    let userInput = Number(inputEl.value)
    let metersToFeet = (userInput * 3.2808399).toFixed(3)
    let feetToMeters = (userInput / 3.2808399).toFixed(3)
    let litersToGallons = (userInput * 0.26417205).toFixed(3)
    let gallonsToLiters = (userInput / 0.26417205).toFixed(3)
    let kilosToPounds = (userInput * 2.20462262).toFixed(3)
    let poundsToKilos = (userInput / 2.20462262).toFixed(3)
    
    lengthText.innerHTML = 
    `<p>
    ${userInput} meters = ${metersToFeet} feet | ${userInput} feet = ${feetToMeters} meters
    </p>`
    
    volumeText.innerHTML = 
    `<p>
    ${userInput} liters = ${litersToGallons} gallons | ${userInput} gallons = ${gallonsToLiters} liters
    </p>`
    
    massText.innerHTML = 
    `<p>
    ${userInput} kilos = ${kilosToPounds} pounds | ${userInput} pounds = ${poundsToKilos} kilos
    </p>`    
})