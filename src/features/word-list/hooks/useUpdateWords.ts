import IUpdateWords from "../interfaces/IUpdateWords";
import WordInfoEditorData from "../types/WordInfoEditorData";
import { useRef, useState } from "react";
import BasicStatus from "../../../general/types/BasicStatus";
import UpdateWordsRequest from "../types/UpdateWordsRequest";
import UpdateWordsResponse from "../types/UpdateWordsResponse";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import requests from "../../../general/requests";
import IWordInfoEditorHook from "../interfaces/IWordInfoEditorHook";

type Datum = { [wordId: number]: WordInfoEditorData };

export default function useUpdateWords<T extends new () => IRequestManager<UpdateWordsRequest, UpdateWordsResponse>>(RequestManager: T, wordInfoEditor: IWordInfoEditorHook): IUpdateWords {
    const requestManager = new RequestManager();

    const [status, setStatus] = useState(BasicStatus.Idle);

    async function update() {
        if (!wordInfoEditor.edited) return;

        const data = {[wordInfoEditor.data.wordId]: wordInfoEditor.data};

        setStatus(BasicStatus.Doing);
        await requestManager
            .patch(requests.updateWords, { datum: Object.values(data) })
            .then(() => {
                setStatus(BasicStatus.Success);
            });
    }

    return {
        status,
        update,
        wordInfoEditor,
    }
}
