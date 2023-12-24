import { useState } from "react";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import BasicStatus from "../../../general/types/BasicStatus";
import requests from "../../../general/requests";
import CreateArticleRequest from "../types/CreateArticleRequest";
import CreateArticleResponse from "../types/CreateArticleResponse";
import ICreateArticle from "../interfaces/ICreateArticle";

export default function useCreateArticle(requestManager: IRequestManager<CreateArticleRequest, CreateArticleResponse>): ICreateArticle {
    const [status, setStatus] = useState(BasicStatus.Idle);

    async function create(title: string, body: string) {
        setStatus(BasicStatus.Doing);
        await requestManager
            .post(requests.createArticle, { title, body })
            .then(() => {
                setStatus(BasicStatus.Success);
            });
    }
    return { status, create };
}
