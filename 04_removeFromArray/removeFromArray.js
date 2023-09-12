const removeFromArray = function(array, ...poped) {
    const newArr = [];
    array.forEach(Myfunction)

    function Myfunction(value) {
        if (!poped.includes(value)){
            newArr.push(value)
        }
    };
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
