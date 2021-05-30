export function getLetterMatchCount(guessedWord, secretWorld) {
    const secretLetterSet = new Set(secretWorld.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [ ...secretLetterSet ]
        .filter(letter => guessedLetterSet?.has(letter)).length;
}