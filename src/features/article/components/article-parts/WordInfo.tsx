import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import IWord from "../../../../general/interfaces/IWord";

interface WordInfoProps {
    word: IWord;
    sx?: SxProps;
}
export default function WordInfo({ word, sx }: WordInfoProps) {
    return (
        <Box sx={{ ...sx }}>
            <Typography textAlign="center" variant="h6">{word.word}</Typography>
            <Typography textAlign="center">zipf: {word.statFrequency}</Typography>
        </Box>
    )
}
