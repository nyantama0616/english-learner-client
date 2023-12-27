import { useState } from "react";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import BasicStatus from "../../../general/types/BasicStatus";
import requests from "../../../general/requests";
import FetchOneArticleRequest from "../types/FetchOneArticleRequest";
import FetchOneArticleResponse from "../types/FetchOneArticleResponse";
import IFetchOneArticle, { Data } from "../interfaces/IFetchOneArticle";
import FetchArticleWordDictRequest from "../types/FetchArticleWordDictRequest";
import FetchArticleWordDictResponse from "../types/FetchArticleWordDictResponse";
import FetchArticleWordsRequest from "../types/FetchArticleWordsRequest";
import FetchArticleWordsResponse from "../types/FetchArticleWordsResponse";

export default function useFetchOneArticle<
    T extends new () => IRequestManager<FetchOneArticleRequest, FetchOneArticleResponse>,
    U extends new () => IRequestManager<FetchArticleWordDictRequest, FetchArticleWordDictResponse>,
    V extends new () => IRequestManager<FetchArticleWordsRequest, FetchArticleWordsResponse>,
>(
    FetchOneRequestManager: T,
    FetchWordDictRequestManager: U,
    FetchWordsRequestManager: V,
) : IFetchOneArticle {
    const [status, setStatus] = useState(BasicStatus.Idle);
    const [data, setData] = useState<Data>({ article: null, wordDict: {}, words: [] });

    const fetchOneRequestManager = new FetchOneRequestManager();
    const fetchWordDictRequestManager = new FetchWordDictRequestManager();
    const fetchWordsRequestManager = new FetchWordsRequestManager();
    
    async function fetch(id: number) {
        setStatus(BasicStatus.Doing);
        await fetchOneRequestManager
            .get(requests.fetchOneArticle(id))
            .then(res => {
                setData(prev => {
                    return { ...prev, article: res! }
                });
            })
            .then(() => {
                fetchWordsRequestManager
                    .get(requests.fetchArticleWords(id))
                    .then(res => {
                        setData(prev => {
                            return { ...prev, words: res!.words }
                        });
                    });
            })
            .then(() => {
                setStatus(BasicStatus.Doing);
                fetchWordDictRequestManager
                    .get(requests.fetchArticleWordDict(id))
                    .then(res => {
                        setData(prev => {
                            return { ...prev, wordDict: res!.words }
                        });
                        setStatus(BasicStatus.Success);
                    });
            });
    }

    return { status, data, fetch };
}
