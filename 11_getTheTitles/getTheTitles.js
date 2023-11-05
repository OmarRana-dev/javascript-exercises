const getTheTitles = function(books) {
    let result = books.map(element => {
        return element.title
    });

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
