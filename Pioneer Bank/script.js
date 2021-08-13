function addBtn(category, plusMinus) {
    const parse = addInputValue("amountOf" + category);
    current("current" + category, parse);
    current("currentBalance", plusMinus * parse);
}

function addInputValue(id) {
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    document.getElementById(id).value = "";
    return inputNumber;
};

function current(id, inputValue) {
    const currentAmount = document.getElementById(id).innerHTML;
    let currentNumber = parseFloat(currentAmount);
    const total = currentNumber + inputValue;
    document.getElementById(id).innerHTML = total;
}





