import IWord from '../interfaces/IWord'

export default class Word implements IWord {
    id: number
    word: string

    constructor(id: number, word: string) {
        this.id = id
        this.word = word
    }
}
