import WordInfoEditorHook from "../interfaces/IWordInfoEditorHook";
import WordInfoEditorData from "../types/WordInfoEditorData";
import IWord from "../../../general/interfaces/IWord";
import { useState } from "react";

const initialData: WordInfoEditorData = {
    meaning: "",
}

export default function useWordInfoEditor(): WordInfoEditorHook {
    const [data, setData] = useState<WordInfoEditorData>(initialData);

    function onMeaningChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        
        setData({
            ...data,
            meaning: value,
        });
    }

    function init(word: IWord) {
        setData({
            meaning: word.meaning,
        });
    }

    return {
        data,
        onMeaningChange,
        init,
    }
}
