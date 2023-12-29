import { createContext, useContext, useState } from "react";
import IArticle from "../../../general/interfaces/IArticle";
import IWord from "../../../general/interfaces/IWord";
import BasicStatus from "../../../general/types/BasicStatus";
import { useCopyToClipboard } from "usehooks-ts";

interface ArticleContextType {
    article: IArticle | null;
    wordDict: { [word: string]: IWord };
    words: IWord[];
    copyArticle: {
        status: BasicStatus;
        copy: () => void;
    };
    display: {
        wordList: boolean;
    };
    toggle: {
        wordList: (flag: boolean) => void;
    };
    currentWord: IWord | null;
    selectWord: (word: IWord | null) => void;
}

const initialValue: ArticleContextType = {
    article: null!,
    wordDict: null!,
    words: null!,
    copyArticle: {
        status: BasicStatus.Idle,
        copy: () => {},
    },
    display: {
        wordList: false,
    },
    toggle: {
        wordList: () => {},
    },
    currentWord: null,
    selectWord: null!,
}

const ArticleContext = createContext<ArticleContextType>(initialValue);

export function useArticle() {
    return useContext(ArticleContext);
}

interface ArticleProviderProps {
    article: IArticle | null;
    wordDict: { [word: string]: IWord };
    words: IWord[];
    children: React.ReactNode;
}
export default function ArticleProvider({ article, wordDict, words, children }: ArticleProviderProps) {
    const [copyArticleStatus, setCopyArticleStatus] = useState<BasicStatus>(BasicStatus.Idle);
    const [_, copyToClipboard] = useCopyToClipboard();
    const [currentWord, setCurrentWord] = useState<IWord | null>(null);
    const [display, setDisplay] = useState<{ wordList: boolean }>({ wordList: false });

    const value: ArticleContextType = {
        article,
        wordDict,
        words,
        copyArticle: {
            status: copyArticleStatus,
            copy: copyArticle,
        },
        display,
        toggle: {
            wordList: (flag: boolean) => setDisplay({ wordList: flag }),
        },
        currentWord,
        selectWord,
    }

    function copyArticle() {
        setCopyArticleStatus(BasicStatus.Idle);

        if (article === null) {
            setCopyArticleStatus(BasicStatus.Failed);
            return;
        }

        copyToClipboard(article.body);

        setCopyArticleStatus(BasicStatus.Success);
    }

    function selectWord(word: IWord | null) {
        setCurrentWord(word);
    }

    return (
        <ArticleContext.Provider value={value}>
            {children}
        </ArticleContext.Provider>
    )
}
