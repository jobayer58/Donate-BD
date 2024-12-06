function getPowerfulSystem(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}

function textTONumber(id) {
    const inputText = document.getElementById(id).innerText
    const convertNumber = parseFloat(inputText)
    return convertNumber
}