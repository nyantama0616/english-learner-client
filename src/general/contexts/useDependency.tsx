
import { createContext, useContext } from 'react';

interface DependencyContextType {
    
}

const initialValue: DependencyContextType = {
    
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

    }
    
    return (
        <DependencyContext.Provider value={value}>
            {children}
        </DependencyContext.Provider>
    );
}
