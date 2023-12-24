import { useEffect, useState } from "react";
import IArticleListHook from "../interfaces/IArticleListHook";
import IFetchArticles from "../interfaces/IFetchArticles";
import { useHotkeys } from "react-hotkeys-hook";
import IFetchOneArticle from "../interfaces/IFetchOneArticle";
import IArticle from "../../../general/interfaces/IArticle";
import ICreateArticle from "../interfaces/ICreateArticle";

interface State {
    displayCreateArticle: boolean;
    selectedArticlePos: number | null;
}

const initialState: State = {
    displayCreateArticle: false,
    selectedArticlePos: null,
}
export default function useArticleListHook(fetchArticles: IFetchArticles, fetchOneArticle: IFetchOneArticle, createArticle: ICreateArticle): IArticleListHook {
    const [state, setState] = useState<State>(initialState);

    /*TODO:
        ここでショートカットを登録するのはおかしい気がする
        Component側で登録するべきだと思う
    */
    useHotkeys('up', _selectPrevArticle, [state.selectedArticlePos]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', _selectNextArticle, [state.selectedArticlePos]);

    useEffect(() => {
        fetchArticles.fetch();
    }, []);

    function selectArticle(pos: number | null) {
                if (pos === null) {
            // setSelected({ pos: null, article: null });
            setState({ ...state, selectedArticlePos: null });
            return;
        }
        const article = fetchArticles.articles[pos];
        if (article === undefined) return;

        setState({ ...state, selectedArticlePos: pos });

        fetchOneArticle
            .fetch(article.id);
    }

    function _selectPrevArticle() {
        if (state.selectedArticlePos === null || state.selectedArticlePos <= 0) return;
        selectArticle(state.selectedArticlePos - 1);
    }

    function _selectNextArticle() {
        if (state.selectedArticlePos === null || state.selectedArticlePos >= fetchArticles.articles.length - 1) return;
        selectArticle(state.selectedArticlePos + 1);
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
        selected: {
            pos: state.selectedArticlePos,
            data: fetchOneArticle.data,
        },
        closeArticle,
        displayFlag: {
            article: state.selectedArticlePos !== null && fetchOneArticle.data.article !== null,
            createArticle: state.displayCreateArticle,
        },
        openCreateArticle,
        closeCreateArticle,
    }
}
