const toReadable = number => {
    const obj = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
        17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 
        70: 'seventy', 80: 'eighty', 90: 'ninety'
    };
    let string = [];
    if(number <= 20){
        string.push(obj[number]);
    }else if(number > 20 && number < 100){
        if(obj.hasOwnProperty(number)){
            string.push(obj[number]);
        }else{
            let units = number % 10;
            string.push(obj[number - units]);
            string.push(obj[units]);
        }
    }else if(number >= 100){
        let hundred = number / 100;
        if(obj.hasOwnProperty(hundred)){
            string.push(`${obj[hundred]} hundred`);
        }else{
            let ten = number % 100;
            let hundred = (number - (ten))/100;
            if(obj.hasOwnProperty(ten)){
                string.push(`${obj[hundred]} hundred`);
                string.push(obj[ten]);
            }else{
                let units = ten % 10;
                string.push(`${obj[hundred]} hundred`);
                string.push(obj[ten - units]);
                string.push(obj[units]);
            }
        }
    }
    
return string.join(' ');
}



module.exports = toReadable;
