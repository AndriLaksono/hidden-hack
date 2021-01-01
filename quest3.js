// return boolean
function isUnique(col, arr) {
    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i][col];
        if (hashTable[el]) {
            return false;
        } else {
            hashTable[el] = i;
        }
    }
    return true;
}

// return boolean
function isUniqueArray(columns, arr) {
    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        let selection = columns.map((v) => el[v]).toString();
        if (hashTable[selection]) {
            return false;
        } else {
            hashTable[selection] = i;
        }
    }
    return true;
}


function solution(relation) {
    let answer = 0;
    // find possible duplicate value in column
    let duplicateColumn = [];
    let maxCol = relation[0].length;
    for (let i = 0; i < maxCol; i++) {
        if (isUnique(i, relation)) {
            answer += 1;
        } else {
            duplicateColumn.push(i);
        }
    }

    if (duplicateColumn.length <= 1) {
        return answer;
    }

    // find merge column
    let colEnd = 1;
    while (true) {
        if (colEnd >= duplicateColumn.length) {
            break
        }

        let column = duplicateColumn.filter((v, index) => index <= colEnd);
        if (isUniqueArray(column, relation)) {
            answer += 1;
            duplicateColumn.splice(0, (colEnd + 1));
            colEnd = 1;
        } else {
            colEnd += 1;
        }
    }

    return answer;
}

let result = solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2']
]);

console.log(result);