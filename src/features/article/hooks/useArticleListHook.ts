import { useEffect, useState } from "react";
import IArticleListHook from "../interfaces/IArticleListHook";
import IFetchArticles from "../interfaces/IFetchArticles";
import { useHotkeys } from "react-hotkeys-hook";

export default function useArticleList(fetchArticles: IFetchArticles): IArticleListHook {
    const [selectedArticlePos, setSelectedArticlePos] = useState<number | null>(null);

    useHotkeys('up', _selectPrevArticle, [selectedArticlePos]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', _selectNextArticle, [selectedArticlePos]);

    useEffect(() => {
        fetchArticles.fetch();
    }, []);

    function selectArticle(pos: number | null) {
        setSelectedArticlePos(pos);
    }

    function _selectPrevArticle() {
        if (selectedArticlePos === null || selectedArticlePos <= 0) return;
        selectArticle(selectedArticlePos - 1);
    }

    function _selectNextArticle() {
        if (selectedArticlePos === null || selectedArticlePos >= fetchArticles.articles.length - 1) return;
        selectArticle(selectedArticlePos + 1);
    }
    
    return {
        fetchArticles,
        selectArticle,
        selectedArticlePos,
    }
}
