import IFetchWords from "./IFetchWords";

export default interface IWordListHook {
    fetchWords: IFetchWords;
    selectedWordPos: number | null;
    selectWord: (pos: number) => void;
    closeWordViewer: () => void;
}
