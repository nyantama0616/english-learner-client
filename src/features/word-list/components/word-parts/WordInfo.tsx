import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { useWord } from "../../contexts/WordContext";

interface WordInfoProps {
    sx?: SxProps;
}
export default function WordInfo({ sx }: WordInfoProps) {
    const { word } = useWord();

    return (
        <Box sx={{...sx}}>
            <h1>{word?.word}</h1>
            <h2>{word?.meaning}</h2>
        </Box>
    )
}
