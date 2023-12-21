import WordInfoEditorData from "../types/WordInfoEditorData";
import IWord from "../../../general/interfaces/IWord";
import React from "react";

export default interface WordInfoEditorHook {
    data: WordInfoEditorData;
    onMeaningChange: React.ChangeEventHandler<HTMLInputElement>;
    init(word: IWord): void;
    isValid(): boolean;
    edited: boolean;
}
