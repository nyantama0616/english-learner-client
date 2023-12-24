import { useState } from "react";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import BasicStatus from "../../../general/types/BasicStatus";
import requests from "../../../general/requests";
import FetchOneArticleRequest from "../types/FetchOneArticleRequest";
import FetchOneArticleResponse from "../types/FetchOneArticleResponse";
import IArticle from "../../../general/interfaces/IArticle";
import IWord from "../../../general/interfaces/IWord";
import IFetchOneArticle, { Data } from "../interfaces/IFetchOneArticle";
import FetchArticleWordsRequest from "../types/FetchArticleWordsRequest";
import FetchArticleWordsResponse from "../types/FetchArticleWordsResponse";

export default function useFetchOneArticle<
    T extends new () => IRequestManager<FetchOneArticleRequest, FetchOneArticleResponse>,
    U extends new () => IRequestManager<FetchArticleWordsRequest, FetchArticleWordsResponse>
>(
    FetchOneRequestManager: T,
    FetchWordsRequestManager: U
) : IFetchOneArticle {
    const [status, setStatus] = useState(BasicStatus.Idle);
    const [data, setData] = useState<Data>({ article: null, words: {} });

    const fetchOneRequestManager = new FetchOneRequestManager();
    const fetchWordsRequestManager = new FetchWordsRequestManager();
    
    async function fetch(id: number) {
        setStatus(BasicStatus.Doing);
        await fetchOneRequestManager
            .get(requests.fetchOneArticle(id))
            .then((res) => {
                setData({ ...data, article: res! });
                setStatus(BasicStatus.Success);
            })
            .then(() => {
                setStatus(BasicStatus.Doing);
                fetchWordsRequestManager
                    .get(requests.fetchArticleWords(id))
                    .then((res) => {
                        console.log(res);
                        
                        setData(prev => {
                            return { ...prev, words: res!.words }
                        });
                        setStatus(BasicStatus.Success);
                    });
            });
    }

    return { status, data, fetch };
}
