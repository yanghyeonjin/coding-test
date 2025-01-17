function solution(participant, completion) {
    const completionMap = new Map();
    let answer = '';
    
    // 완주자를 Map 구조로 변환
    completion.forEach(c => {
        if (completionMap.has(c)) {
            // 동명이인
            completionMap.set(c, completionMap.get(c) + 1);
        } else {
            completionMap.set(c, 1);
        }
    });
    
    // 참여자를 완주자 Map에서 검색
    participant.forEach(p => {
        if (completionMap.has(p)) {
            const value = completionMap.get(p);
            if (value === 0) {
                answer = p;
                return;
            }
            
            completionMap.set(p, value - 1);
        } else {
            answer = p;
            return;
        }
    })
    
    return answer;
}