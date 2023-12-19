import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IWord from "../../../general/interfaces/IWord";
import WeblioWindow from "./WeblioWindow";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface WordViewerProps {
    word: IWord;
    onClose: () => void;
    sx?: SxProps;
}
export default function WordViewer({ word, onClose, sx }: WordViewerProps) {
    return (
        <Box sx={{...sx, display: "flex", justifyContent: "center"}}>
            <WeblioWindow wordName={word.word} sx={{ width: "40%", background: "#ffefef" }} />
            <CloseButton onClick={ onClose } sx={{ position: "absolute", top: "0", right: "0" }} />
        </Box>
    )
}

interface CloseButtonProps {
    onClick: () => void;
    sx?: SxProps;
}
function CloseButton({ onClick, sx }: CloseButtonProps) {
    return (
        <HighlightOffIcon onClick={onClick} sx={{
            width: "50px",
            height: "50px",
            ":hover": {
                cursor: "pointer",
                transform: "scale(1.2)",
            },
            ...sx
        }} />
    )
}
