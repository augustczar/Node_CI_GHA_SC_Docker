function applyDiscount(price, discount){
    if(discount > price)
        return 0;
    
    return price - discount;
}

// soma valores
function sum(a, b) {
    return a + b;
}

// subtrai valores
function sub(a, b) {
    return a - b;
}

// multiplica valores
function times(a, b) {
    return a * b;
}

// divide valores
function div(a, b) {
    return a / b;
}

module.exports = { applyDiscount, sum, sub, times, div }
