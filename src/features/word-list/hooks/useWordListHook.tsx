import IFetchWords from "../interfaces/IFetchWords"
import { useEffect } from "react";
import IWordListHook from "../interfaces/IWordListHook";
import { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook'
import IWordInfoEditorHook from "../interfaces/IWordInfoEditorHook";

export default function useWordList(fetchWords: IFetchWords, wordInfoEditorHook: IWordInfoEditorHook): IWordListHook {
    const [selectedWordPos, setSelectedWordPos] = useState<number | null>(null);
    useHotkeys('up', () => _selectPrevWord(), [selectedWordPos]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', () => _selectNextWord(), [selectedWordPos]);

    useEffect(() => {
        fetchWords.fetch();
    }, []);

    function selectWord(pos: number | null) {
        if (pos === null) {
            setSelectedWordPos(null);
            return;
        }

        if (pos < 0 || pos >= fetchWords.words.length) {
            throw new Error(`pos must be between 0 and ${fetchWords.words.length - 1}`);
        };

        const word = fetchWords.words[pos];
        
        wordInfoEditorHook.init(word);
        setSelectedWordPos(pos);
    }

    function _selectPrevWord() {
        if (selectedWordPos === null || selectedWordPos <= 0) return;
        selectWord(selectedWordPos - 1);
    }

    function _selectNextWord() {
        if (selectedWordPos === null || selectedWordPos >= fetchWords.words.length - 1) return;
        selectWord(selectedWordPos + 1);
    }

    function closeWordViewer() {
        selectWord(null);
    }

    return {
        fetchWords,
        selectedWordPos,
        selectWord,
        closeWordViewer,
        wordInfoEditorHook,
    }
}
