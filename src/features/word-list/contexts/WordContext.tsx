import { createContext, useContext, useState } from "react";
import IWord from "../../../general/interfaces/IWord";
import IWordInfoEditorHook from "../interfaces/IWordInfoEditorHook";
import useWordInfoEditorHook from "../hooks/useWordInfoEditorHook";

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
    wordInfoEditorHook: IWordInfoEditorHook;
}

const initialValue: WordContextType = {
    word: null!,
    display: null!,
    toggle: null!,
    wordInfoEditorHook: null!,
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
    const [display, setDisplay] = useState({
        wordViewer: false,
        wordInfoEditor: false,
        weblioWindow: false,
    });

    const wordInfoEditorHook = useWordInfoEditorHook();

    const toggle = {
        wordViewer: (flag: boolean) => setDisplay({ ...display, wordViewer: flag }),
        wordInfoEditor: (flag: boolean) => setDisplay({ ...display, wordInfoEditor: flag }),
        weblioWindow: (flag: boolean) => setDisplay({ ...display, weblioWindow: flag }),
    }

    return (
        <WordContext.Provider value={{ word, display, toggle, wordInfoEditorHook }}>
            { children }
        </WordContext.Provider>
    )
}
