import { createContext, useContext, useState } from "react";
import IWord from "../../../general/interfaces/IWord";
import { useDependency } from "../../../general/contexts/DependencyContext";
import IUpdateWords from "../interfaces/IUpdateWords";

interface WordContextType {
    word: IWord | null;
    display: {
        wordViewer: boolean;
        wordInfoEditor: boolean;
        weblioWindow: boolean;
    };
    toggle: {
        wordViewer: (display: boolean) => void;
        wordInfoEditor: (display: boolean) => void;
        weblioWindow: (display: boolean) => void;
    };
    // wordInfoEditorHook: IWordInfoEditorHook;
    updateWords: IUpdateWords;
}

const initialValue: WordContextType = {
    word: null!,
    display: null!,
    toggle: null!,
    // wordInfoEditorHook: null!,
    updateWords: null!,
}

const WordContext = createContext<WordContextType>(initialValue);

export function useWord() {
    return useContext(WordContext);
}

interface WordProviderProps {
    word: IWord | null;
    children: React.ReactNode;
}
export function WordProvider({ word, children }: WordProviderProps) {
    const { useWordInfoEditorHook, useUpdateWords, RequestManager } = useDependency();
    
    const [display, setDisplay] = useState({
        wordViewer: false,
        wordInfoEditor: false,
        weblioWindow: false,
    });

    const wordInfoEditorHook = useWordInfoEditorHook();
    const updateWords = useUpdateWords(RequestManager, wordInfoEditorHook);

    const toggle = {
        wordViewer: (flag: boolean) => setDisplay({ ...display, wordViewer: flag }),
        wordInfoEditor: (flag: boolean) => setDisplay({ ...display, wordInfoEditor: flag }),
        weblioWindow: (flag: boolean) => setDisplay({ ...display, weblioWindow: flag }),
    }

    return (
        <WordContext.Provider value={{ word, display, toggle, updateWords }}>
            { children }
        </WordContext.Provider>
    )
}
