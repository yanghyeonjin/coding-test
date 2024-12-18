function solution(myString) {
    let answer = '';
    
    for (let i = 0; i < myString.length; i++) {
        const char = myString[i];
        if (char === 'a') {
            answer += 'A';
        } else if (/[B-Z]/.test(char)) {
            answer += char.toLowerCase();
        } else {
            answer += char;
        }
    }
    
    return answer;
}