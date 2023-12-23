
import { createContext, useContext } from 'react';
import RequestManagerMock from '../mocks/RequestManagerMock';
import IFetchWords from '../../features/word-list/interfaces/IFetchWords';
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
import FetchArticlesRequest from '../../features/article/types/FetchArticlesRequest';
import FetchArticlesResponse from '../../features/article/types/FetchArticlesResponse';
import useFetchArticles from '../../features/article/hooks/useFetchArticles';
import useFetchOneArticle from '../../features/article/hooks/useFetchOneArticle';
import FetchOneArticleRequest from '../../features/article/types/FetchOneArticleRequest';
import FetchOneArticleResponse from '../../features/article/types/FetchOneArticleResponse';

interface DependencyContextType {
    wordListHook: IWordListHook;
    wordInfoEditorHook: IWordInfoEditorHook;
    articleListHook: IArticleListHook;
}

const initialValue: DependencyContextType = {
    wordListHook: null!,
    wordInfoEditorHook: null!,
    articleListHook: null!,
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
    const updateWords = useUpdateWords(updateRequestManager);
    const wordListHook = useWordListHook(fetchWords, wordInfoEditorHook, updateWords);

    const fetchArticleRequestManager = new RequestManager<FetchArticlesRequest, FetchArticlesResponse>();
    const fetchArticleWords = useFetchArticles(fetchArticleRequestManager);
    const fetchOneArticleRequestManager = new RequestManager<FetchOneArticleRequest, FetchOneArticleResponse>();
    const fetchOneArticle = useFetchOneArticle(fetchOneArticleRequestManager);
    const articleListHook = useArticleListHook(fetchArticleWords, fetchOneArticle);

    const value: DependencyContextType = {
        wordListHook,
        wordInfoEditorHook,
        articleListHook,
    }
    
    return (
        <DependencyContext.Provider value={value}>
            {children}
        </DependencyContext.Provider>
    );
}
