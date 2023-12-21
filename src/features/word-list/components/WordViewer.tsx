import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IWord from "../../../general/interfaces/IWord";
import WeblioWindow from "./WeblioWindow";
import WordInfo from "./WordInfo";
import WordInfoEditor from "./WordInfoEditor";
import CloseButton from "../../../general/components/CloseButton";
import IWordInfoEditorHook from "../interfaces/IWordInfoEditorHook";

interface WordViewerProps {
    word: IWord;
    onClose: () => void;
    wordInfoEditorHook: IWordInfoEditorHook;
    sx?: SxProps;
}
export default function WordViewer({ word, onClose, wordInfoEditorHook, sx }: WordViewerProps) {
    return (
        <Box sx={{ ...sx, display: "flex", justifyContent: "center", gap: "20px" }}>
            {/* <WordInfo word={word} sx={{ width: "40%", background: "#ffefef" }} /> */}
            <WordInfoEditor word={word} hook={wordInfoEditorHook} sx={{ width: "40%", background: "#ffefef" }} />
            <WeblioWindow wordName={word.word} sx={{ width: "40%", background: "#ffefef" }} />
            <CloseButton onClick={ onClose } sx={{ position: "absolute", top: "0", right: "0" }} />
        </Box>
    )
}
