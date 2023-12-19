import IFetchWords from "../interfaces/IFetchWords"
import { useEffect } from "react";
import IWordListHook from "../interfaces/IWordListHook";
import { useState } from "react";

export default function useWordList(fetchWords: IFetchWords): IWordListHook {
    const [selectedWordPos, setSelectedWordPos] = useState<number | null>(null);

    useEffect(() => {
        fetchWords.fetch();
        setSelectedWordPos(0);
    }, []);

    return {
        fetchWords,
        selectedWordPos,
    }
}
