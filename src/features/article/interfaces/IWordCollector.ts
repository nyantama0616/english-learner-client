import IWord from "../../../general/interfaces/IWord";

export default interface IWordCollector {
    words: IWord[];
    // sort: {
    //     byFrequency: boolean;
    // },
    // filter: {
    //     minFrequency: number;
    // },
    settings: {
        sortByFrequency: boolean;
        minFrequency: number;
    };
    setMinFrequency: (minFrequency: number) => void;
    setSortByFrequency: (sortByFrequency: boolean) => void;
}
