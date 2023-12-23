import IFetchArticles from "../interfaces/IFetchArticles";
import IArticle from "../../../general/interfaces/IArticle";
import BasicStatus from "../../../general/types/BasicStatus";
import { useState } from "react";
import requests from "../../../general/requests";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import FetchArticlesRequest from "../types/FetchArticlesRequest";
import FetchArticlesResponse from "../types/FetchArticlesResponse";

export default function useFetchArticles(requestManager: IRequestManager<FetchArticlesRequest, FetchArticlesResponse>): IFetchArticles {
    const [status, setStatus] = useState<BasicStatus>(BasicStatus.Idle);
    const [articles, setArticles] = useState<IArticle[]>([]);

    async function fetch(): Promise<void> {
        setStatus(BasicStatus.Doing);
        await requestManager
            .get(requests.fetchArticles)
            .then((res) => {
                setArticles(res!.articles);
                setStatus(BasicStatus.Success);
            });
    }

    return { status, articles, fetch };
}
