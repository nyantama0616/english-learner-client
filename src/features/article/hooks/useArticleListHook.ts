import { useEffect, useState } from "react";
import IArticleListHook from "../interfaces/IArticleListHook";
import IFetchArticles from "../interfaces/IFetchArticles";
import { useHotkeys } from "react-hotkeys-hook";
import IFetchOneArticle from "../interfaces/IFetchOneArticle";
import IArticle from "../../../general/interfaces/IArticle";

interface Selected {
    pos: number | null;
    article: IArticle | null;
}
export default function useArticleListHook(fetchArticles: IFetchArticles, fetchOneArticle: IFetchOneArticle): IArticleListHook {
    const [selected, setSelected] = useState<Selected>({ pos: null, article: null });

    /*TODO:
        ここでショートカットを登録するのはおかしい気がする
        Component側で登録するべきだと思う
    */
    useHotkeys('up', _selectPrevArticle, [selected]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', _selectNextArticle, [selected]);

    useEffect(() => {
        fetchArticles.fetch();
    }, []);

    function selectArticle(pos: number | null) {
                if (pos === null) {
            setSelected({ pos: null, article: null });
            return;
        }
        const article = fetchArticles.articles[pos];
        if (article === undefined) return;

        setSelected({ pos, article });

        fetchOneArticle
            .fetch(article.id);
    }

    function _selectPrevArticle() {
        if (selected.pos === null || selected.pos <= 0) return;
        selectArticle(selected.pos - 1);
    }

    function _selectNextArticle() {
        if (selected.pos === null || selected.pos >= fetchArticles.articles.length - 1) return;
        selectArticle(selected.pos + 1);
    }

    function closeArticle() {
        selectArticle(null);
    }
    
    return {
        fetchArticles,
        selectArticle,
        selectedArticlePos: selected.pos,
        selectedArticle: fetchOneArticle.article,
        closeArticle,
    }
}
