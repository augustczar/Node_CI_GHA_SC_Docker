function applyDiscount(price, discount){
    if(discount > price)
        return 0;
    
    return price - discount;
}

module.exports = { applyDiscount }
