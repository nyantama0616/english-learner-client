import IUpdateWords from "../interfaces/IUpdateWords";
import WordInfoEditorData from "../types/WordInfoEditorData";
import { useRef, useState } from "react";
import BasicStatus from "../../../general/types/BasicStatus";
import UpdateWordsRequest from "../types/UpdateWordsRequest";
import UpdateWordsResponse from "../types/UpdatewordsResponse";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import requests from "../../../general/requests";

type Datum = { [wordId: number]: WordInfoEditorData };

export default function useUpdateWordsMock(requestManager: IRequestManager<UpdateWordsRequest, UpdateWordsResponse>): IUpdateWords {
    const [status, setStatus] = useState(BasicStatus.Idle);
    const datumRef = useRef<Datum>({});

    function update() {
        setStatus(BasicStatus.Doing);
        requestManager
            .patch(requests.updateWords, { datum: Object.values(datumRef.current) })
            .then(() => {
                setStatus(BasicStatus.Success);
                datumRef.current = [];
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
