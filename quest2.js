function solution(n, users) {
    let answer = [];
    users.sort();

    let stage = 1;
    while (true) {
        let freq  = users.filter(v => v === stage).length;
        let space = users.filter(v => v >= stage).length;
        
        answer.push({
            stage: stage,
            rate: freq/space
        });

        if (stage === n) {
            break
        }
        stage++;
    }

    answer.sort((a, b) => b.rate - a.rate);
    return answer.map(v => v.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))