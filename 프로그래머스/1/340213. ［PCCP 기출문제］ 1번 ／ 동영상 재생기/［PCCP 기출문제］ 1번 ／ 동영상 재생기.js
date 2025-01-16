function solution(video_len, pos, op_start, op_end, commands) {
    const initialPosSecond = toSecond(pos);
    const opStartSecond = toSecond(op_start);
    const opEndSecond = toSecond(op_end);
    const videoLenSecond = toSecond(video_len);
    
    // 1. 시작 지점 셋팅
    let currentPos = getStartPos(initialPosSecond, opStartSecond, opEndSecond);
    
    // 2. 시간 계산
    commands.forEach(command => {
        if (command === 'next') {
            if (videoLenSecond - currentPos < 10) currentPos = videoLenSecond;
            else currentPos += 10;
        } else if (command === 'prev') {
            if (currentPos < 10) currentPos = 0;
            else currentPos -= 10;
        }
        
        // 3. 결과가 다시 오프닝인지 체크
        const isOpening = isPosOpening(currentPos, opStartSecond, opEndSecond);
        if (isOpening) {
            currentPos = opEndSecond;
        }
    })
    
    // 4. string으로 변경
    const resultMinute = Math.trunc(currentPos / 60).toString().padStart(2, 0);
    const resultSecond = (currentPos % 60).toString().padStart(2, 0);
    
    return `${resultMinute}:${resultSecond}`;
}

function isPosOpening(posSecond, opStartSecond, opEndSecond) {
    return opStartSecond <= posSecond && posSecond < opEndSecond;
}

function toSecond(time) {
    const [minute, second] = time.split(':');
    return Number(minute) * 60 + Number(second);
}

function getStartPos(posSecond, opStartSecond, opEndSecond) {
    const isOpening = isPosOpening(posSecond, opStartSecond, opEndSecond);
    return isOpening ? opEndSecond : posSecond;
}