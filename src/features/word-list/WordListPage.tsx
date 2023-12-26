import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";
import WordList from "./components/WordList";
import WordViewer from "./components/word-parts/WordViewer";
import { useDependency } from "../../general/contexts/useDependency";
import { WordProvider, useWord } from "./contexts/WordContext";
import { useEffect } from "react";

interface WordListPageProps {
    sx?: SxProps;
}
export default function WordListPage({ sx }: WordListPageProps) {
    const hook = useDependency().wordListHook;
    const word = hook.selectedWordPos !== null ? hook.fetchWords.words[hook.selectedWordPos] : null;

    return (
        <WordProvider word={word}>
            <Main sx={sx} />
        </WordProvider>
    )
}

function Main({ sx }: WordListPageProps) {
    const { wordListHook, useUpdateWords, RequestManager } = useDependency();
    const updateWords = useUpdateWords(RequestManager);
    const { toggle, wordInfoEditorHook, display } = useWord();

    useEffect(() => {
        if (wordInfoEditorHook.edited) {
            updateWords.push({ ...wordInfoEditorHook.data });
            updateWords
                .update()
                .then(() => {
                    _fetch();
                });
        }
        
        if (wordListHook.selected.word === null) return;
        
        wordInfoEditorHook.init({ ...wordListHook.selected.word });
    }, [wordListHook.selected.word]);
    
    useEffect(() => {
        if (!display.wordViewer) {
            wordListHook.selectWord(null);
        }
    }, [display.wordViewer]);

    useEffect(() => {
        _fetch();
    }, []);

    function _fetch() {
        const params = {
            limit: 20,
            minStatFrequency: 2.0,
        }
        wordListHook.fetchWords.fetch(params);
    }

    function _selectWord(pos: number) {
        toggle.wordViewer(true);
        wordListHook.selectWord(pos);
    }
    
    return (
        <PageTemplate className="home-page" sx={{ ...sx, position: "relative" }}>
            <h1>Word List</h1>
            <WordList words={wordListHook.fetchWords.words} onSelectWord={_selectWord} sx={{ backgroundColor: "#eeeeee" }} />
            <WordViewer
                sx={{
                    backgroundColor: "lightblue",
                    width: "194%",
                    height: "800px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />
        </PageTemplate>
    )
}
