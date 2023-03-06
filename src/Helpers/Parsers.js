const parsePopulation = (num) => {
    
    let str = num.toString();
    let result = '';
    let counter = 0;
    
    for(let i = str.length - 1; i >= 0; i--) {
        result = str[i] + result;
        counter++;
        if(counter === 3 && i !== 0) {
            result = ',' + result;
            counter = 0;
        }
    }
    
    return result;
}

module.exports = {
    parsePopulation,
}