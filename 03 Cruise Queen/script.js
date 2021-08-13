function updateInputValue(id, isIncrease, price) {
    const inputNumber = getInputValue(id);
    let updateInput = inputNumber;
    if(isIncrease == true){
        updateInput = inputNumber + 1
    }
    else if(isIncrease == false && inputNumber > 0){
        updateInput = inputNumber - 1
    }
    
    document.getElementById(id + "Input").value = updateInput;
    document.getElementById(id + "Price").innerHTML = updateInput * price;
    calculateTotal()
}

function calculateTotal() {
    const firstClassInput = getInputValue('firstClass');
    const economyInput = getInputValue('economy');

    const subtotal = firstClassInput * 150 + economyInput * 100;
    document.getElementById('subtotal').innerHTML = subtotal;

    const vat = parseInt(subtotal * 0.10);
    document.getElementById('vat').innerHTML = vat;

    document.getElementById('total').innerHTML = subtotal + vat;
}

function getInputValue(id) {
    return parseInt(document.getElementById(id + "Input").value)
}