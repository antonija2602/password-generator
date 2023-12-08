// ==================== VARIABLES ====================
const passwordLabel = document.getElementById("password-label")
const copyButton = document.getElementById("button-copy")
const passwordLength = document.getElementById("length")
const upperCheckbox = document.getElementById("upper")
const lowerCheckbox = document.getElementById("lower")
const numbersCheckbox = document.getElementById("number")
const symbolsCheckbox = document.getElementById("symbol")
const generateButton = document.getElementById("button-generate")

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+="

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}
// console.log(getUppercase())

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}
// console.log(getLowercase())

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
// console.log(getNumber())

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}
// console.log(getSymbol())
