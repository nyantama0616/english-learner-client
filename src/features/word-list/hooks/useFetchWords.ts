import { useState } from "react";
import IFetchWords from "../interfaces/IFetchWords";
import BasicStatus from "../../../general/types/BasicStatus";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import FetchWordsRequest from "../types/FetchWordsRequest";
import FetchWordsResponse from "../types/FetchWordsResponse";
import requests from "../../../general/requests";
import IWord from "../../../general/interfaces/IWord";

export default function useFetchWords<T extends new () => IRequestManager<FetchWordsRequest, FetchWordsResponse>>(RequestManager: T): IFetchWords {
    const requestManager = new RequestManager();
    const [status, setStatus] = useState(BasicStatus.Idle);
    const [words, setWords] = useState<IWord[]>([]);

    async function fetch(params: FetchWordsRequest) {
        setStatus(BasicStatus.Doing);
        await requestManager
            .get(requests.fetchWords, params)
            .then((res) => {
                setWords(res!.words);
                setStatus(BasicStatus.Success);
            });
    }

    return { status, words, fetch };
}
