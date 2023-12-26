import WordInfoEditorData from "../types/WordInfoEditorData";
import IWord from "../../../general/interfaces/IWord";
import React from "react";

export default interface IWordInfoEditorHook {
    data: WordInfoEditorData;
    onMeaningChange: React.ChangeEventHandler<HTMLInputElement>;
    onReportedChange: React.ChangeEventHandler<HTMLInputElement>;
    init(word: IWord): void;
    isValid(): boolean;
    edited: boolean;
}
