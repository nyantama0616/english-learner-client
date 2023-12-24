import IFetchArticles from "./IFetchArticles";
import IArticle from "../../../general/interfaces/IArticle";
import ICreateArticle from "./ICreateArticle";

export default interface IArticleListHook {
    fetchArticles: IFetchArticles;
    createArticle: ICreateArticle;
    selectArticle: (pos: number | null) => void;
    selectedArticlePos: number | null;
    selectedArticle: IArticle | null;
    closeArticle: () => void;
    openCreateArticle: () => void;
    closeCreateArticle: () => void;
    displayFlag: {
        article: boolean;
        createArticle: boolean;
    }
}
