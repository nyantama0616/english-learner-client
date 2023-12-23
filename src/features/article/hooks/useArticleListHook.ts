import { useEffect, useState } from "react";
import IArticleListHook from "../interfaces/IArticleListHook";
import IFetchArticles from "../interfaces/IFetchArticles";

export default function useArticleList(fetchArticles: IFetchArticles): IArticleListHook {
    const [selectedArticlePos, setSelectedWordPos] = useState<number | null>(null);

    useEffect(() => {
        fetchArticles.fetch();
    }, []);

    useEffect(() => {
        console.log(selectedArticlePos);
    }, [selectedArticlePos]);

    function selectArticle(pos: number | null) {
        setSelectedWordPos(pos);
    }
    
    return {
        fetchArticles,
        selectArticle,
        selectedArticlePos,
    }
}
