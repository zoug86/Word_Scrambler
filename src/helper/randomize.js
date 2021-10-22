export const randomize = (sentence) => {
    return sentence.split(' ').map((word) => {
        if (word.length < 4) {
            return word;
        } else {
            let newWord = '';
            let indexList = [];
            while (newWord.length < word.length - 2) {
                let index = Math.floor(Math.random() * (word.length - 2)) + 1;
                if (index === 0 || index === word.length - 1) {
                    continue;
                } else {
                    if (!indexList.includes(index)) {
                        indexList.push(index);
                        newWord += word[index];
                    } else {
                        continue;
                    }
                }
            }
            return word[0] + newWord + word[word.length - 1]
        }
    }).join(' ');
}