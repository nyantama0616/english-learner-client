import IFetchWords from "./IFetchWords";
import IWordInfoEditorHook from "./IWordInfoEditorHook";

export default interface IWordListHook {
    fetchWords: IFetchWords;
    wordInfoEditorHook: IWordInfoEditorHook;
    selectedWordPos: number | null;
    selectWord: (pos: number) => void;
    closeWordViewer: () => void;
}
