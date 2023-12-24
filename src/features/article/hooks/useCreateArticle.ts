import { useState } from "react";
import IRequestManager from "../../../general/interfaces/IRequestManager";
import BasicStatus from "../../../general/types/BasicStatus";
import requests from "../../../general/requests";
import CreateArticleRequest from "../types/CreateArticleRequest";
import CreateArticleResponse from "../types/CreateArticleResponse";
import ICreateArticle from "../interfaces/ICreateArticle";

const initialData: CreateArticleRequest = { title: "", body: "" };

export default function useCreateArticle(requestManager: IRequestManager<CreateArticleRequest, CreateArticleResponse>): ICreateArticle {
    const [status, setStatus] = useState(BasicStatus.Idle);
    const [data, setData] = useState<CreateArticleRequest>(initialData);

    function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setData({ ...data, title: e.target.value });
    }

    function onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setData({ ...data, body: e.target.value });
    }

    async function create() {
        setStatus(BasicStatus.Doing);
        await requestManager
            .post(requests.createArticle, data)
            .then(() => {
                setStatus(BasicStatus.Success);
                setData(initialData);
            });
    }

    return {
        status,
        data,
        handler: {
            onChangeTitle,
            onChangeBody
        },
        create
    };
}
