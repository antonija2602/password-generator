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
const symbols = "!@#$%^&*)_+="

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    const len = passwordLength.value

    let password = ""

    if (upperCheckbox.checked) {
        password += getUppercase()
    }

    if (lowerCheckbox.checked) {
        password += getLowercase()
    }

    if (numbersCheckbox.checked) {
        password += getNumber()
    }

    if (symbolsCheckbox.checked) {
        password += getSymbol()
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX()

        password += x
    }

    passwordLabel.innerText = password
}

function generateX() {
    const xs = []

    if (upperCheckbox.checked) {
        xs.push(getUppercase())
    }

    if (lowerCheckbox.checked) {
        xs.push(getLowercase())
    }

    if (numbersCheckbox.checked) {
        xs.push(getNumber())
    }

    if (symbolsCheckbox.checked) {
        xs.push(getSymbol())
    }

    if (xs.length === 0) return ""
    return xs[Math.floor(Math.random() * xs.length)]
}

generateButton.addEventListener("click", generatePassword)

copyButton.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = passwordLabel.innerText

    if (!password) {
        return
    }

    textarea.value = password
    document.body.append(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard")
})
