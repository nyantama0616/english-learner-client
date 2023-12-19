
import { createContext, useContext } from 'react';
import RequestManagerMock from '../mocks/RequestManagerMock';
import IFetchWords from '../../features/word-list/interfaces/IFetchWords';
import useFetchWords from '../../features/word-list/hooks/useFetchWords';
import FetchWordsRequest from '../../features/word-list/types/FetchWordsRequest';
import FetchWordsResponse from '../../features/word-list/types/FetchWordsResponse';

interface DependencyContextType {
    fetchWords: IFetchWords;
}

const initialValue: DependencyContextType = {
    fetchWords: null!,
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
    
    const value: DependencyContextType = {
        fetchWords,
    }
    
    return (
        <DependencyContext.Provider value={value}>
            {children}
        </DependencyContext.Provider>
    );
}
