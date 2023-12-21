
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
import useUpdateWordsMock from '../../features/word-list/hooks/useUpdateWordsMock';

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
    const requestManager = new RequestManagerMock<FetchWordsRequest, FetchWordsResponse>();
    const fetchWords = useFetchWords(requestManager);
    const wordInfoEditorHook = useWordInfoEditorHook();
    const updateWords = useUpdateWordsMock(requestManager);
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
