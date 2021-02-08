/**
 * @methd getLetterMatchCount
 * @param {string} guessedWord - Guesse word
 * @param {string} secretWorld  - Secret word.
 * @returns { number } - Number of letters matched between guessed word
 */

export function getLetterMatchCount(guessedWord, secretWorld) {
    const secretLetterSet = new Set(secretWorld.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [ ...secretLetterSet ].filter(letter => guessedLetterSet?.has(letter)).length;
}