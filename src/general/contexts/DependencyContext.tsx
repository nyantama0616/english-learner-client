
import { createContext, useContext } from 'react';
import useFetchWords from '../../features/word-list/hooks/useFetchWords';
import useWordListHook from '../../features/word-list/hooks/useWordListHook';
import useWordInfoEditorHook from '../../features/word-list/hooks/useWordInfoEditorHook';
import useUpdateWords from '../../features/word-list/hooks/useUpdateWords';
import RequestManager from '../classes/RequestManager';
import useArticleListHook from '../../features/article/hooks/useArticleListHook';
import useFetchArticles from '../../features/article/hooks/useFetchArticles';
import useFetchOneArticle from '../../features/article/hooks/useFetchOneArticle';
import useCreateArticle from '../../features/article/hooks/useCreateArticle';

interface DependencyContextType {
    useWordListHook: typeof useWordListHook;
    useFetchWords: typeof useFetchWords;
    useWordInfoEditorHook: typeof useWordInfoEditorHook;
    useFetchArticles: typeof useFetchArticles;
    useFetchOneArticle: typeof useFetchOneArticle;
    useCreateArticle: typeof useCreateArticle;
    useArticleListHook: typeof useArticleListHook;
    useUpdateWords: typeof useUpdateWords;
    RequestManager: typeof RequestManager;
}

const initialValue: DependencyContextType = {
    useWordListHook: null!,
    useFetchWords: null!,
    useWordInfoEditorHook: null!,
    useFetchArticles: null!,
    useFetchOneArticle: null!,
    useCreateArticle: null!,
    useArticleListHook: null!,
    useUpdateWords: null!,
    RequestManager: null!,
}

const DependencyContext = createContext<DependencyContextType>(initialValue);

export function useDependency() {
    return useContext(DependencyContext);
}

interface DependencyProviderProps {
    children: React.ReactNode
}
export function DependencyProvider({ children }: DependencyProviderProps) {
    const value: DependencyContextType = {
        useWordListHook,
        useFetchWords,
        useWordInfoEditorHook,
        useFetchArticles,
        useFetchOneArticle,
        useCreateArticle,
        useArticleListHook,
        useUpdateWords,
        RequestManager,
    }
    
    return (
        <DependencyContext.Provider value={value}>
            {children}
        </DependencyContext.Provider>
    );
}
