import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IWord from "../../../general/interfaces/IWord";

interface WordInfoProps {
    word: IWord;
    sx?: SxProps;
}
export default function WordInfo({ word, sx }: WordInfoProps) {
    return (
        <Box sx={{...sx}}>
            <h1>{word.word}</h1>
            <h2>{word.meaning}</h2>
        </Box>
    )
}
