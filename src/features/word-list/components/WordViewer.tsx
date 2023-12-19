import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IWord from "../../../general/interfaces/IWord";
import WeblioWindow from "./WeblioWindow";

interface WordViewerProps {
    word: IWord;
    sx?: SxProps;
}
export default function WordViewer({ word, sx }: WordViewerProps) {
    return (
        <Box sx={{...sx, display: "flex", justifyContent: "center"}}>
            <WeblioWindow wordName={ word.word } sx={{ width: "40%", background: "#ffefef" }} />
        </Box>
    )
}
