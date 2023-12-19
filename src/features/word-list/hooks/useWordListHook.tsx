import IFetchWords from "../interfaces/IFetchWords"
import { useEffect } from "react";
import IWordListHook from "../interfaces/IWordListHook";
import { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook'

export default function useWordList(fetchWords: IFetchWords): IWordListHook {
    const [selectedWordPos, setSelectedWordPos] = useState<number | null>(null);
    useHotkeys('up', () => _selectPrevWord(), [selectedWordPos]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', () => _selectNextWord(), [selectedWordPos]);

    useEffect(() => {
        fetchWords.fetch();
    }, []);

    function selectWord(pos: number) {
        setSelectedWordPos(pos);
    }

    function _selectPrevWord() {
        if (selectedWordPos === null || selectedWordPos <= 0) return;
        setSelectedWordPos(selectedWordPos - 1);
    }

    function _selectNextWord() {
        if (selectedWordPos === null || selectedWordPos >= fetchWords.words.length - 1) return;
        setSelectedWordPos(selectedWordPos + 1);
    }

    function closeWordViewer() {
        setSelectedWordPos(null);
    }

    return {
        fetchWords,
        selectedWordPos,
        selectWord,
        closeWordViewer,
    }
}
