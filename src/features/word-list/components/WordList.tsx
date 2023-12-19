import { Box, List } from "@mui/material";
import { SxProps } from "@mui/system";
import WordListItem from "./WordListItem";
import IWord from "../../../general/interfaces/IWord";

interface WordListProps {
    words: IWord[]
    sx?: SxProps;
}
export default function WordList({ words, sx }: WordListProps) {
    const items = words.map((word, i) => <WordListItem key={i.toString()} wordName={word.word} />);

    return (
        <Box sx={{...sx}}>
            <List>
                {items}
            </List>
        </Box>
    )
}
