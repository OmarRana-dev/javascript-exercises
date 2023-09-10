const repeatString = function(word, time) {
    if (time < 0) return "ERROR";
    let str = "";
    for (let i = 0; i < time; i++){
        str += word;
    }    
    return str;
};

// Do not edit below this line
module.exports = repeatString;
