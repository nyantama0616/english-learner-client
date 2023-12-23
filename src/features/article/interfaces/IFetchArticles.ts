import IArticle from "../../../general/interfaces/IArticle";
import BasicStatus from "../../../general/types/BasicStatus";

export default interface IFetchArticles {
    status: BasicStatus;
    articles: IArticle[];
    fetch(): Promise<void>;
}
