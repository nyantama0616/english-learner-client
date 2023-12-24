import IFetchArticles from "./IFetchArticles";
import IArticle from "../../../general/interfaces/IArticle";
import ICreateArticle from "./ICreateArticle";
import { Data } from "./IFetchOneArticle";

export default interface IArticleListHook {
    fetchArticles: IFetchArticles;
    createArticle: ICreateArticle;
    selectArticle: (pos: number | null) => void;
    selected: {
        pos: number | null;
        data: Data;
    };
    closeArticle: () => void;
    openCreateArticle: () => void;
    closeCreateArticle: () => void;
    displayFlag: {
        article: boolean;
        createArticle: boolean;
    }
}
