function increaseDecrease(id, isIncrease, price) {
    const amountNum = getInputValue(id);
    let total = amountNum;
    if(isIncrease == true){
        total = amountNum + 1;
    }
    else if(isIncrease == false && amountNum > 0){
        total = amountNum - 1;
    }
    
    document.getElementById(id + "Input").value = total;
    document.getElementById(id + "Price").innerHTML = price * total;
    calculateTotal()
};

function calculateTotal() {
    const phonePrice = getInputValue("phone") * 1219;
    const casePrice = getInputValue("case") * 59;

    const subTotal = phonePrice + casePrice;
    document.getElementById("subTotal").innerHTML = subTotal;
    
    const tax = Math.round(subTotal * 0.10)
    document.getElementById("tax").innerHTML = tax;
    
    document.getElementById('total').innerHTML = subTotal + tax
}

function getInputValue(id) {
    return parseInt(document.getElementById(id + "Input").value)
}

