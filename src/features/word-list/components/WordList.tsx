import { Box, List } from "@mui/material";
import { SxProps } from "@mui/system";
import WordListItem from "./WordListItem";
import { useDependency } from "../../../general/contexts/useDependency";
import { useEffect } from "react";

interface WordListProps {
    sx?: SxProps;
}
export default function WordList({ sx }: WordListProps) {
    const { fetchWords } = useDependency();
    const items = fetchWords.words.map((word, i) => <WordListItem key={i.toString()} wordName={word.word} />);

    useEffect(() => {
        fetchWords.fetch();
    }, []);

    return (
        <Box sx={{...sx}}>
            <List>
                {items}
            </List>
        </Box>
    )
}
