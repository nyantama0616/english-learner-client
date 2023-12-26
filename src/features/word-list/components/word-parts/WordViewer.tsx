import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import WeblioWindow from "./WeblioWindow";
import WordInfoEditor from "./WordInfoEditor";
import CloseButton from "../../../../general/components/CloseButton";
import { useWord } from "../../contexts/WordContext";

interface WordViewerProps {
    sx?: SxProps;
}
export default function WordViewer({ sx }: WordViewerProps) {
    const { word, display, toggle } = useWord();

    if (!display.wordViewer) return null;

    function _close() {
        toggle.wordViewer(false);
    }
    
    return (
        <Box sx={{ ...sx, display: "flex", justifyContent: "center", gap: "20px" }}>
            {/* <WordInfo word={word} sx={{ width: "40%", background: "#ffefef" }} /> */}
            <WordInfoEditor sx={{ width: "40%", background: "#ffefef" }} />
            <WeblioWindow wordName={word?.word || ""} sx={{ width: "40%", background: "#ffefef" }} />
            <CloseButton onClick={ _close } sx={{ position: "absolute", top: "0", right: "0" }} />
        </Box>
    )
}
