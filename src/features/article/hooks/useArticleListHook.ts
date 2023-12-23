import { useEffect } from "react";
import IArticleListHook from "../interfaces/IArticleListHook";
import IFetchArticles from "../interfaces/IFetchArticles";

export default function useArticleList(fetchArticles: IFetchArticles): IArticleListHook {
    useEffect(() => {
        fetchArticles.fetch();
    }, []);
    
    return {
        fetchArticles
    }
}
