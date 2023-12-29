import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import IWordCollector from "../../../article/interfaces/IWordCollector";
import IWord from "../../../../general/interfaces/IWord";
import useWordCollector from "../useWordCollector";

describe('useArticleListHook', () => {
    let result: { current: IWordCollector; } = null!;
    const defaultWord = { realFrequency: 0, pronunciation: "", meaning: "", reported: false, };
    beforeEach(async () => {
        let words: IWord[] = null!;
        words = [
            { id: 0, word: "apple", statFrequency: 1.5, ...defaultWord },
            { id: 1, word: "chocolate", statFrequency: 1.2, ...defaultWord },
            { id: 2, word: "banana", statFrequency: 1.3, ...defaultWord },
            { id: 3, word: "lemon", statFrequency: 2.2, ...defaultWord },
            { id: 4, word: "orange", statFrequency: 4.2, ...defaultWord },
        ];
        result = renderHook(() => {
            return useWordCollector(words);
        }).result;
    });

    test('setMinFrequencyを呼ぶと、settings.minFrequencyが更新される', async () => {
        await act(async () => {
            result.current.setMinFrequency(1.5);
        });

        expect(result.current.settings.minFrequency).toEqual(1.5);
    });

    test('setSortByFrequencyを呼ぶと、settings.sortByFrequencyが更新される', async () => {
        await act(async () => {
            result.current.setSortByFrequency(true);
        });

        expect(result.current.settings.sortByFrequency).toEqual(true);
    });

    test('defaultでは単語名でソートされる', async () => {
        const wordNames = result.current.words.map((word) => word.word);
        expect(wordNames).toEqual(["apple", "banana", "chocolate", "lemon", "orange"]);
    });

    test('sortByFrequencyがtrueの場合、statFrequencyでソートされる', async () => {
        await act(async () => {
            result.current.setSortByFrequency(true);
        });

        const wordNames = result.current.words.map((word) => word.word);
        expect(wordNames).toEqual(["orange", "lemon", "apple", "banana", "chocolate"]);
    });

    test('minFrequencyが1.5の場合、statFrequencyが1.5以上の単語が表示される', async () => {
        await act(async () => {
            result.current.setMinFrequency(1.5);
        });

        const wordNames = result.current.words.map((word) => word.word);
        expect(wordNames).toEqual(["apple", "lemon", "orange"]);
    });
});
