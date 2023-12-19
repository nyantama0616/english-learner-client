import IWord from '../interfaces/IWord'

export default class Word implements IWord {
    id: number;
    word: string;
    realFrequency: number;
    statFrequency: number;
    pronunciation: string;
    meaning: string;

    constructor(id: number, word: string, realFrequency: number, statFrequency: number, pronunciation: string, meaning: string) {
        this.id = id;
        this.word = word;
        this.realFrequency = realFrequency;
        this.statFrequency = statFrequency;
        this.pronunciation = pronunciation;
        this.meaning = meaning;
    }
}
