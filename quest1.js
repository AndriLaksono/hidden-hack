
function solution(record) {
    let answer = [];

    let transformedData = record.map(el => el.split(" "));
    
    for (let i = 0; i < transformedData.length; i++) {
        const el    = transformedData[i];
        const name  = el[2] ? el[2] : null;
        const id    = el[1];

        if (el[0] === 'Enter') {
            answer.filter(v => v[2] === id ? v[0] = name : false)
            answer.push([name, 'came in', id]);
        }
        if (el[0] === 'Leave') {
            let name = answer.find(v => v[2] === id);
            answer.push([name[0], 'has left', id]);
        }
        if (el[0] === 'Change') {
            answer.filter(v => v[2] === id ? v[0] = name : false);
        }
    }

    return answer.map(v => `${v[0]} ${v[1]}`);
}

const input = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

console.log(solution(input));