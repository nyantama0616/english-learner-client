import BasicStatus from "../../../general/types/BasicStatus";
import CreateArticleRequest from "../types/CreateArticleRequest";

export default interface ICreateArticle {
    status: BasicStatus;
    data: CreateArticleRequest;
    handler: {
        onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onChangeBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }
    create(): Promise<void>;
}
