import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import WordList from "../../../word-list/components/WordList";
import { useArticle } from "../../contexts/ArticleContext";
import { useWord } from "../../../word-list/contexts/WordContext";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import IconButton from "../../../../general/components/IconButton";
import useWordCollector from "../../../word-list/hooks/useWordCollector";
import { useEffect } from "react";

interface WordListViewerProps {
    sx?: SxProps;
}
export default function WordListViewer({ sx }: WordListViewerProps) {
    const { words, selectWord } = useArticle();
    const { toggle } = useWord();
    const wordCollector = useWordCollector(words);

    useEffect(() => {
        wordCollector.setMinFrequency(3.0);
    }, []);

    return (
        <Box
            sx={{
                ...sx,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
            }}
        >
            <Box sx={{ width: "100%" }}>
                <Typography variant="body1">単語数: {wordCollector.words.length}</Typography>
                {/* <IconButton title="Filter" onClick={() => { }} sx={{color: "black"}}>
                    <FilterAltIcon />
                </IconButton> */}
            </Box>

            <WordList
                words={wordCollector.words}
                onSelectWord={(pos: number) => {
                    const word = wordCollector.words[pos] || null;
                    selectWord(word);
                    toggle.wordViewer(true);
                }}
                sx={{
                    width: "80%",
                    height: "90%",
                    backgroundColor: "#eeeefe",
                }}
                />
        </Box>
    )
}
