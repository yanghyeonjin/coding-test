function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        const phoneA = phone_book[i];
        const phoneB = phone_book[i + 1];
        
        if (phoneB.startsWith(phoneA)) {
            return false;
        }
    } 
    
    return true;
}