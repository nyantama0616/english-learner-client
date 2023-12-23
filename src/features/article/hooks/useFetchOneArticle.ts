import { useState } from "react";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import BasicStatus from "../../../general/types/BasicStatus";
import requests from "../../../general/requests";
import FetchOneArticleRequest from "../types/FetchOneArticleRequest";
import FetchOneArticleResponse from "../types/FetchOneArticleResponse";
import IArticle from "../../../general/interfaces/IArticle";

export default function useFetchOneArticle(requestManager: IRequestManager<FetchOneArticleRequest, FetchOneArticleResponse>) {
    const [status, setStatus] = useState(BasicStatus.Idle);
    const [article, setArticle] = useState<IArticle | null>(null);
    
    async function fetch(id: number) {
        setStatus(BasicStatus.Doing);
        await requestManager
            .get(requests.fetchOneArticle(id))
            .then((res) => {
            setArticle(res);
            setStatus(BasicStatus.Success);
        });
    }
    return { status, article, fetch };
}
