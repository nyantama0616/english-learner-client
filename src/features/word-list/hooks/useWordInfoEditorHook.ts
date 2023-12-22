import WordInfoEditorHook from "../interfaces/IWordInfoEditorHook";
import WordInfoEditorData from "../types/WordInfoEditorData";
import IWord from "../../../general/interfaces/IWord";
import { useState } from "react";

const initialData: WordInfoEditorData = {
    wordId: -1,
    meaning: "",
    reported: false,
}

interface State {
    data: WordInfoEditorData;
    edited: boolean;
}
export default function useWordInfoEditor(): WordInfoEditorHook {
    const [{ edited, data }, setState] = useState<State>({
        edited: false,
        data: initialData,
    });

    function onMeaningChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        
        setState({
            edited: true,
            data: {...data , meaning: value},
        });
    }

    function onReportedChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.checked;

        setState({
            edited: true,
            data: {...data , reported: value},
        });
    }

    function init(word: IWord) {
        setState({
            edited: false,
            data: {
                wordId: word.id,
                meaning: word.meaning,
                reported: word.reported,
            }
        });
    }

    //TODO: validation書く
    function isValid() {
        return true;
    }

    return {
        data,
        onMeaningChange,
        onReportedChange,
        init,
        isValid,
        edited,
    }
}
