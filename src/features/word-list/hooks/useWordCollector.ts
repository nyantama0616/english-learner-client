import { useMemo, useState } from "react";
import IWord from "../../../general/interfaces/IWord";
import IWordCollector from "../../article/interfaces/IWordCollector";

interface Settings {
    sortByFrequency: boolean;
    minFrequency: number;
}

const initialState: Settings = {
    sortByFrequency: false,
    minFrequency: 0,
};
export default function useWordCollector(words: IWord[]): IWordCollector {
    const [settings, setSettings] = useState<Settings>(initialState);
    const resultWords = useMemo(() => {
        return words
            .filter((word) => word.statFrequency >= settings.minFrequency)
            .sort((a, b) => {
                if (settings.sortByFrequency) {
                    return b.statFrequency - a.statFrequency;
                } else {
                    return a.word.localeCompare(b.word);
                }
            });
    }, [words, settings]);

    return {
        words: resultWords,
        settings,
        setMinFrequency: (minFrequency: number) => {
            setSettings((prev) => ({
                ...prev,
                minFrequency,
            }));
        },
        setSortByFrequency: (sortByFrequency: boolean) => {
            setSettings((prev) => ({
                ...prev,
                sortByFrequency,
            }));
        },
    };
}
