import { Box, Grid, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import ArticleBody from "./Body";
import CopyButton from "./CopyButton";
import { useArticle } from "../../contexts/ArticleContext";
import { WordProvider } from "../../../word-list/contexts/WordContext";
import WordViewer from "../../../word-list/components/word-parts/WordViewer";
import WordList from "../../../word-list/components/WordList";
import { useWord } from "../../../word-list/contexts/WordContext";

interface ArticleProps {
    sx?: SxProps;
}
export default function Article({ sx }: ArticleProps) {
    const { article, copyArticle, currentWord } = useArticle();

    if (article === null) return null;

    return (
        <Box className="article" sx={{ ...sx }}>
            <WordProvider word={currentWord}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <Typography variant="h1" fontSize="3rem">{article.title}</Typography>
                    <CopyButton status={copyArticle.status} onClick={copyArticle.copy} />
                </Box>

                <ArticleBody
                    body={article.body}
                    sx={{
                        width: "100%",
                        height: "86%",
                        margin: "10px",
                        overflowY: "scroll"
                    }}
                />

                <WordListWrapper
                    sx={{
                        backgroundColor: "#eeeeee",
                        width: "50%",
                        height: "600px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />

                <WordViewer
                    sx={{
                        backgroundColor: "lightblue",
                        width: "120%",
                        height: "600px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </WordProvider>
        </Box>
    )
}

interface WordListWrapperProps {
    sx?: SxProps;
}
function WordListWrapper({ sx }: WordListWrapperProps) {
    const { words, selectWord } = useArticle();
    const { toggle } = useWord();
    return (
        <WordList
            words={words}
            onSelectWord={(pos: number) => {
                const word = words[pos] || null;
                selectWord(word);
                toggle.wordViewer(true);
            }}
            sx={sx}
        />
    )
}
