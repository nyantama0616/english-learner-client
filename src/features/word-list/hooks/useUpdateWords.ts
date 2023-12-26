import IUpdateWords from "../interfaces/IUpdateWords";
import WordInfoEditorData from "../types/WordInfoEditorData";
import { useRef, useState } from "react";
import BasicStatus from "../../../general/types/BasicStatus";
import UpdateWordsRequest from "../types/UpdateWordsRequest";
import UpdateWordsResponse from "../types/UpdateWordsResponse";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import requests from "../../../general/requests";

type Datum = { [wordId: number]: WordInfoEditorData };

export default function useUpdateWords<T extends new () => IRequestManager<UpdateWordsRequest, UpdateWordsResponse>>(RequestManager: T): IUpdateWords {
    const requestManager = new RequestManager();

    const [status, setStatus] = useState(BasicStatus.Idle);
    const datumRef = useRef<Datum>({});

    async function update() {
        if (Object.keys(datumRef.current).length === 0) return;

        setStatus(BasicStatus.Doing);
        await requestManager
            .patch(requests.updateWords, { datum: Object.values(datumRef.current) })
            .then(() => {
                setStatus(BasicStatus.Success);
                datumRef.current = {};
            });
    }

    function push(data: WordInfoEditorData) {
        datumRef.current[data.wordId] = data;
    }

    return {
        status,
        update,
        push,
    }
}
