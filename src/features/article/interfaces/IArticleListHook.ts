import IFetchArticles from "./IFetchArticles";

export default interface IArticleListHook {
    fetchArticles: IFetchArticles;
    selectArticle: (pos: number | number) => void;
    selectedArticlePos: number | null;
}
