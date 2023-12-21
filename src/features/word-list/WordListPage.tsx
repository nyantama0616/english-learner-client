import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";
import WordList from "./components/WordList";
import WordViewer from "./components/WordViewer";
import { useDependency } from "../../general/contexts/useDependency";
interface WordListPageProps {
    sx?: SxProps;
}
export default function WordListPage({ sx }: WordListPageProps) {
    const hook = useDependency().wordListHook;
    const wordViewer = hook.selectedWordPos !== null ?
        <WordViewer
            word={hook.fetchWords.words[hook.selectedWordPos]}
            onClose={hook.closeWordViewer}
            wordInfoEditorHook={hook.wordInfoEditorHook}
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
        : null;
    
    return (
        <PageTemplate className="home-page" sx={{ ...sx, position: "relative" }}>
            <h1>Word List</h1>
            <WordList words={ hook.fetchWords.words } onSelectWord={ hook.selectWord } sx={{ backgroundColor: "#eeeeee" }} />
            { wordViewer }
        </PageTemplate>
    )
}
