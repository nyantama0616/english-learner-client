import IWord from '../interfaces/IWord'

export default class Word implements IWord {
    id: number;
    word: string;
    realFrequency: number;
    statFrequency: number;
    pronunciation: string;
    meaning: string;
    reported: boolean;

    constructor(id: number, word: string, realFrequency: number, statFrequency: number, pronunciation: string, meaning: string, reported: boolean) {
        this.id = id;
        this.word = word;
        this.realFrequency = realFrequency;
        this.statFrequency = statFrequency;
        this.pronunciation = pronunciation;
        this.meaning = meaning;
        this.reported = reported;
    }
}
