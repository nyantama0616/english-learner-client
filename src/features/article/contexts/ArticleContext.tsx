import { createContext, useContext, useState } from "react";
import IArticle from "../../../general/interfaces/IArticle";
import IWord from "../../../general/interfaces/IWord";
import BasicStatus from "../../../general/types/BasicStatus";
import { useCopyToClipboard } from "usehooks-ts";

interface ArticleContextType {
    article: IArticle | null;
    wordDict: { [word: string]: IWord };
    copyArticle: {
        status: BasicStatus;
        copy: () => void;
    };
}

const initialValue: ArticleContextType = {
    article: null!,
    wordDict: null!,
    copyArticle: {
        status: BasicStatus.Idle,
        copy: () => {},
    },
}

const ArticleContext = createContext<ArticleContextType>(initialValue);

export function useArticle() {
    return useContext(ArticleContext);
}

interface ArticleProviderProps {
    article: IArticle | null;
    wordDict: { [word: string]: IWord };
    children: React.ReactNode;
}
export default function ArticleProvider({ article, wordDict, children }: ArticleProviderProps) {
    const [copyArticleStatus, setCopyArticleStatus] = useState<BasicStatus>(BasicStatus.Idle);
    const [_, copyToClipboard] = useCopyToClipboard();

    const value: ArticleContextType = {
        article,
        wordDict,
        copyArticle: {
            status: copyArticleStatus,
            copy: copyArticle,
        },
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

    return (
        <ArticleContext.Provider value={value}>
            {children}
        </ArticleContext.Provider>
    )
}
