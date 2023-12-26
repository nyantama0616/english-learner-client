import IFetchWords from "../interfaces/IFetchWords"
import { useEffect } from "react";
import IWordListHook from "../interfaces/IWordListHook";
import { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook'
import IUpdateWords from "../interfaces/IUpdateWords";

export default function useWordList(fetchWords: IFetchWords, updateWords: IUpdateWords): IWordListHook {
    const [selectedWordPos, setSelectedWordPos] = useState<number | null>(null);
    useHotkeys('up', _selectPrevWord, [selectedWordPos]); //TODO: 第２引数はどういう意味？, ショートカットを管理するクラスを作る
    useHotkeys('down', _selectNextWord, [selectedWordPos]);

    useEffect(() => {
        _fetch();
    }, []);

    const selectWord = function(pos: number | null) {
        // if (!wordInfoEditorHook.isValid()) return; //validationに引っかかったら何もしない
        
        // if (wordInfoEditorHook.edited) {
        //     updateWords.push({ ...wordInfoEditorHook.data });
        //     updateWords
        //         .update()
        //         .then(() => {
        //             _fetch();
        //         });
        // }

        if (pos === null) {
            setSelectedWordPos(null);
            return;
        }

        if (pos < 0 || pos >= fetchWords.words.length) {
            throw new Error(`pos must be between 0 and ${fetchWords.words.length - 1}`);
        };

        // const word = fetchWords.words[pos];
        
        // wordInfoEditorHook.init({ ...word });
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

    function _fetch() {
        const params = {
            limit: 20,
            minStatFrequency: 2.0,
        }
        fetchWords.fetch(params);
    }

    return {
        fetchWords,
        selectedWordPos,
        selected: {
            pos: selectedWordPos,
            word: selectedWordPos === null ? null : fetchWords.words[selectedWordPos],
        },
        selectWord,
    }
}
