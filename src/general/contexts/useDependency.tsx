
import { createContext, useContext } from 'react';
import RequestManagerMock from '../mocks/RequestManagerMock';
import useFetchWords from '../../features/word-list/hooks/useFetchWords';
import FetchWordsRequest from '../../features/word-list/types/FetchWordsRequest';
import FetchWordsResponse from '../../features/word-list/types/FetchWordsResponse';
import IWordListHook from '../../features/word-list/interfaces/IWordListHook';
import useWordListHook from '../../features/word-list/hooks/useWordListHook';
import IWordInfoEditorHook from '../../features/word-list/interfaces/IWordInfoEditorHook';
import useWordInfoEditorHook from '../../features/word-list/hooks/useWordInfoEditorHook';
import useUpdateWords from '../../features/word-list/hooks/useUpdateWords';
import RequestManager from '../classes/RequestManager';
import UpdateWordsRequest from '../../features/word-list/types/UpdateWordsRequest';
import UpdateWordsResponse from '../../features/word-list/types/UpdateWordsResponse';

import IArticleListHook from '../../features/article/interfaces/IArticleListHook';
import useArticleListHook from '../../features/article/hooks/useArticleListHook';
import useFetchArticles from '../../features/article/hooks/useFetchArticles';
import useFetchOneArticle from '../../features/article/hooks/useFetchOneArticle';
import useCreateArticle from '../../features/article/hooks/useCreateArticle';

interface DependencyContextType {
    wordListHook: IWordListHook;
    wordInfoEditorHook: IWordInfoEditorHook;
    articleListHook: IArticleListHook;
    useUpdateWords: typeof useUpdateWords;
    RequestManager: typeof RequestManager;
}

const initialValue: DependencyContextType = {
    wordListHook: null!,
    wordInfoEditorHook: null!,
    articleListHook: null!,
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
    // const requestManager = new RequestManagerMock<FetchWordsRequest, FetchWordsResponse>();
    const fetchRequestManager = new RequestManager<FetchWordsRequest, FetchWordsResponse>();
    const fetchWords = useFetchWords(fetchRequestManager);
    const wordInfoEditorHook = useWordInfoEditorHook();
    const updateRequestManager = new RequestManager<UpdateWordsRequest, UpdateWordsResponse>();
    const wordListHook = useWordListHook(fetchWords);

    const fetchArticleWords = useFetchArticles(RequestManager);
    const fetchOneArticle = useFetchOneArticle(RequestManager, RequestManager);
    const createArticle = useCreateArticle(RequestManager);
    const articleListHook = useArticleListHook(fetchArticleWords, fetchOneArticle, createArticle);

    const value: DependencyContextType = {
        wordListHook,
        wordInfoEditorHook,
        articleListHook,
        useUpdateWords,
        RequestManager,
    }
    
    return (
        <DependencyContext.Provider value={value}>
            {children}
        </DependencyContext.Provider>
    );
}
