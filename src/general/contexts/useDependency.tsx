
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

interface DependencyContextType {
    wordListHook: IWordListHook;
    wordInfoEditorHook: IWordInfoEditorHook;
}

const initialValue: DependencyContextType = {
    wordListHook: null!,
    wordInfoEditorHook: null!,
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

    const value: DependencyContextType = {
        wordListHook,
        wordInfoEditorHook,
    }
    
    return (
        <DependencyContext.Provider value={value}>
            {children}
        </DependencyContext.Provider>
    );
}
