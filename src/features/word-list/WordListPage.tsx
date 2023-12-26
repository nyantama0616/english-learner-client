import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";
import WordList from "./components/WordList";
import WordViewer from "./components/word-parts/WordViewer";
import { useDependency } from "../../general/contexts/DependencyContext";
import { WordProvider, useWord } from "./contexts/WordContext";
import { useEffect } from "react";
import IWordListHook from "./interfaces/IWordListHook";

interface WordListPageProps {
    sx?: SxProps;
}
export default function WordListPage({ sx }: WordListPageProps) {
    const { useWordListHook, useFetchWords, RequestManager } = useDependency();
    const hook = useWordListHook(useFetchWords(RequestManager));
    const word = hook.selectedWordPos !== null ? hook.fetchWords.words[hook.selectedWordPos] : null;

    return (
        <WordProvider word={word}>
            <Main hook={hook} sx={sx} />
        </WordProvider>
    )
}

interface MainProps extends WordListPageProps {
    hook: IWordListHook;
}
function Main({ sx, hook }: MainProps) {
    const { toggle, updateWords, display } = useWord();

    useEffect(() => {
        updateWords
            .update()
            .then(() => {
                _fetch();
            });
        
        if (hook.selected.word === null) return;
        
        updateWords.wordInfoEditor.init({ ...hook.selected.word });
    }, [hook.selected.pos]);
    
    useEffect(() => {
        if (!display.wordViewer) {
            hook.selectWord(null);
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
        hook.fetchWords.fetch(params);
    }

    function _selectWord(pos: number) {
        toggle.wordViewer(true);
        hook.selectWord(pos);
    }
    
    return (
        <PageTemplate className="home-page" sx={{ ...sx, position: "relative" }}>
            <h1>Word List</h1>
            <WordList words={hook.fetchWords.words} onSelectWord={_selectWord} sx={{ backgroundColor: "#eeeeee" }} />
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
