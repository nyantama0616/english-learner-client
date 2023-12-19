import IFetchWords from "./IFetchWords";

export default interface IWordListHook {
    fetchWords: IFetchWords;
    selectedWordPos: number | null;
}
