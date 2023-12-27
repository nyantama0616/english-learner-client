import { Box, List } from "@mui/material";
import { SxProps } from "@mui/system";
import WordListItem from "./WordListItem";
import IWord from "../../../general/interfaces/IWord";

interface WordListProps {
    words: IWord[]
    onSelectWord: (pos: number) => void;
    sx?: SxProps;
}
export default function WordList({ words, onSelectWord, sx }: WordListProps) {
    const items = words.map((word, i) => <WordListItem key={i.toString()} wordName={word.word} onClick={ () => {onSelectWord(i)} } />);

    return (
        <Box sx={{...sx, overflowY: "scroll"}}>
            <List>
                {items}
            </List>
        </Box>
    )
}
