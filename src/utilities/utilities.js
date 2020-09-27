const isEmptyObject = (val) => {
    return Object.entries(val).length === 0 && val.constructor === Object;
}

const isEmptyArr = (val) => {
    return Object.entries(val).length === 0 && val.constructor === Array;
}

const calculateSelection = (arr, key) => {
    if (!arr.length) return 0;

    let newArr = arr.filter((ele) => {
        return ele[key];
    });

    return newArr.length;
}


const limitingChars = (str, limit) => {
    if (str.length > limit) {
        return `${str.substr(0, limit + 1)}...`;
    }
    return str;
}

const findEleIndex = (arr, key, val) => {
    if (arr && !isEmptyObject(arr)) {
        return arr.findIndex((ele) => {
            return ele[key] === val;
        });
    }
    return -1;
}

export default {
    isEmptyObject,
    calculateSelection,
    limitingChars,
    findEleIndex,
    isEmptyArr
}