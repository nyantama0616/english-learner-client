import BasicStatus from "../../../general/types/BasicStatus";
import IWordInfoEditorHook from "./IWordInfoEditorHook";

export default interface IUpdateWords {
    status: BasicStatus;
    update(): Promise<void>; //サーバーに送信
    wordInfoEditor: IWordInfoEditorHook
}
