"use strict";

function uniqueArray(arr) {
    var duplicate = [];
    var unique = [];
    var newArray;
    while (newArray = arr.pop()) {
        if (arr.indexOf(newArray) > -1) {
            duplicate.push(newArray);
            continue;
        } else if (duplicate.indexOf(newArray) == -1) {
            unique.push(newArray);
        }
    }
    return (unique.reverse())
}

function failPassAvg(arr) {
    var arrMin = Math.min(...arr);
    var arrMax = Math.max(...arr);
    var arrAvg = arr.reduce((a, b) => a + b, 0) / arr.length;
    arrAvg = Math.floor(arrAvg)

    if (arrMin < 50 && arrMax > 50) {
        arr = arr.sort((a, b) => a - b);
        var smallest = arr.slice(0, 1);
        var restOfArray = arr.slice(1, 1 + arr.length)

        var restOfArrayAvg = restOfArray.reduce((a, b) => a + b, 0) / restOfArray.length;
        restOfArrayAvg = Math.floor(restOfArrayAvg)

        return ([...smallest, restOfArrayAvg]);
    } else if (arrMin > 50) {
        arr = arr.sort((a, b) => b - a);
        arrMin = -1;

        var maxArrAvg = arr.reduce((a, b) => a + b, 0) / arr.length;
        maxArrAvg = Math.floor(maxArrAvg)
        return ([arrMin, maxArrAvg])

    } else if (arrMax < 50) {
        arrMax = -1;
        var minArrAvg = arr.reduce((a, b) => a + b, 0) / arr.length;
        minArrAvg = Math.floor(minArrAvg)
        return ([minArrAvg, arrMax])
    }
}


function checkDate(x) {
    x = x.trim();
    x = x.split(/[ ,]+/)

    var months = ["January", "February", "March", "April", , "May", "June", "July", "August", "September", "October", "November", "December"];
    var numberOfDays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "31"];

    if (months.indexOf(x[0]) > -1) {
        if (numberOfDays.indexOf(x[1]) > -1) {
            return (true)
        } else {
            return (false)
        }
    } else {
        return (false);
    }
}


function daysBetweenTwoDates(date1, date2) {
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);

    return (Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24)))

}


function swapCharacter(str, c1, c2) {
    return (str.split(c1).map(s => s.split(c2).join(c1)).join(c2));
}


function moveCapitalToFront(str) {
    let upperRgx = /[A-Z]/g;
    let upperLetters = str.match(upperRgx);

    for (let i = 0; i < upperLetters.length; i++) {
        let indx = str.indexOf(upperLetters[i]);
        str = str.substring(0, indx) + str.substring(indx + 1, str.length);
    }
    str = upperLetters.join("") + str;

    return (str);
}


function trimZero(value) {
    var number = parseFloat(value);

    return (number); //124.12
}


function sortArray(x, y) {
    if (y === "Asc") {
        return (x.sort((a, b) => a - b));
    } else if (y === "Des") {
        return (x.sort((a, b) => b - a));
    } else if (y === "None") {
        return (x)
    }

}


function repeatingCharacter(str) {
    const result = [];
    const strArr = str.split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        strArr.forEach((elem) => {
            result.push(elem[0]);
            var output = result.toString()
            return (output);
        });
    } else {
        return ("-1")
    }

}


function capitalizeFirstLetter(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }

    return (newarray1.join(' '));
}