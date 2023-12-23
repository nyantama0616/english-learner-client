import IArticle from "../../../general/interfaces/IArticle";
import BasicStatus from "../../../general/types/BasicStatus";

export default interface IFetchOneArticle {
    status: BasicStatus;
    article: IArticle | null;
    fetch(id: number): Promise<void>;
}
