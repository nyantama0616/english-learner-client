import IFetchArticles from "./IFetchArticles";
import IArticle from "../../../general/interfaces/IArticle";

export default interface IArticleListHook {
    fetchArticles: IFetchArticles;
    selectArticle: (pos: number | number) => void;
    selectedArticlePos: number | null;
    selectedArticle: IArticle | null;
    closeArticle: () => void;
}
