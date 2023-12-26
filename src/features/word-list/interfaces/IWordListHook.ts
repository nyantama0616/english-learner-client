import IFetchWords from "./IFetchWords";
import IWord from "../../../general/interfaces/IWord";

export default interface IWordListHook {
    fetchWords: IFetchWords;
    selected: {
        pos: number | null;
        word: IWord | null;
    };
    selectedWordPos: number | null;
    selectWord: (pos: number | null) => void;
}
