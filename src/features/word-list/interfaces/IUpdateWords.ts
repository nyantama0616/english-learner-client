import BasicStatus from "../../../general/types/BasicStatus";
import WordInfoEditorData from "../types/WordInfoEditorData";

export default interface IUpdateWords {
    status: BasicStatus;
    update(): Promise<void>; //サーバーに送信
    push(data: WordInfoEditorData): void; //リクエスト数を減らすために、この時点ではサーバーに送信しない
}
