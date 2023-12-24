import { useEffect, useState } from "react";
import IArticleListHook from "../interfaces/IArticleListHook";
import IFetchArticles from "../interfaces/IFetchArticles";
import { useHotkeys } from "react-hotkeys-hook";
import IFetchOneArticle from "../interfaces/IFetchOneArticle";
import IArticle from "../../../general/interfaces/IArticle";
import ICreateArticle from "../interfaces/ICreateArticle";

interface Selected {
    pos: number | null;
    article: IArticle | null;
}
interface State {
    displayCreateArticle: boolean;
    selected: Selected;
}

const initialState: State = {
    displayCreateArticle: false,
    selected: {
        pos: null,
        article: null
    }
}
export default function useArticleListHook(fetchArticles: IFetchArticles, fetchOneArticle: IFetchOneArticle, createArticle: ICreateArticle): IArticleListHook {
    const [state, setState] = useState<State>(initialState);

    /*TODO:
        ここでショートカットを登録するのはおかしい気がする
        Component側で登録するべきだと思う
    */
    useHotkeys('up', _selectPrevArticle, [state.selected]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', _selectNextArticle, [state.selected]);

    useEffect(() => {
        fetchArticles.fetch();
    }, []);

    function selectArticle(pos: number | null) {
                if (pos === null) {
            // setSelected({ pos: null, article: null });
            setState({ ...state, selected: { pos: null, article: null } });
            return;
        }
        const article = fetchArticles.articles[pos];
        if (article === undefined) return;

        setState({ ...state, selected: { pos, article } });

        fetchOneArticle
            .fetch(article.id);
    }

    function _selectPrevArticle() {
        if (state.selected.pos === null || state.selected.pos <= 0) return;
        selectArticle(state.selected.pos - 1);
    }

    function _selectNextArticle() {
        if (state.selected.pos === null || state.selected.pos >= fetchArticles.articles.length - 1) return;
        selectArticle(state.selected.pos + 1);
    }

    function closeArticle() {
        selectArticle(null);
    }

    function openCreateArticle() {
        setState({ ...state, displayCreateArticle: true });
    }

    function closeCreateArticle() {
        setState({ ...state, displayCreateArticle: false });
    }
    
    return {
        fetchArticles,
        createArticle,
        selectArticle,
        selectedArticlePos: state.selected.pos,
        selectedArticle: fetchOneArticle.article,
        closeArticle,
        displayCreateArticle: state.displayCreateArticle,
        openCreateArticle,
        closeCreateArticle,
    }
}
