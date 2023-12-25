import { createContext, useContext } from "react";
import IArticle from "../../../general/interfaces/IArticle";
import IWord from "../../../general/interfaces/IWord";

interface ArticleContextType {
    article: IArticle | null;
    wordDict: { [word: string]: IWord };
}

const initialValue: ArticleContextType = {
    article: null!,
    wordDict: null!,
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
    const value: ArticleContextType = {
        article,
        wordDict,
    }

    return (
        <ArticleContext.Provider value={value}>
            {children}
        </ArticleContext.Provider>
    )
}
