import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";
import WordList from "./components/WordList";
import WordViewer from "./components/word-parts/WordViewer";
import { useDependency } from "../../general/contexts/useDependency";
import { WordProvider, useWord } from "./contexts/WordContext";

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
    const hook = useDependency().wordListHook;
    const { toggle } = useWord();

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
