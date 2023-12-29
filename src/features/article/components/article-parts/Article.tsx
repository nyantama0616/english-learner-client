import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import ArticleBody from "./Body";
import CopyButton from "./CopyButton";
import { useArticle } from "../../contexts/ArticleContext";
import { WordProvider } from "../../../word-list/contexts/WordContext";
import WordViewer from "../../../word-list/components/word-parts/WordViewer";
import IconButton from "../../../../general/components/IconButton";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import WordListViewer from "./WordListViewer";

interface ArticleProps {
    sx?: SxProps;
}
export default function Article({ sx }: ArticleProps) {
    const { article, copyArticle, currentWord, display, toggle } = useArticle();

    if (article === null) return null;

    const wordList = display.wordList
        ? <WordListViewer
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
        : null;

    return (
        <Box className="article" sx={{ ...sx }}>
            <WordProvider word={currentWord}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <Typography variant="h1" fontSize="3rem">{article.title}</Typography>
                    <CopyButton status={copyArticle.status} onClick={copyArticle.copy} />
                    <IconButton title="Word List" onClick={() => { toggle.wordList(!display.wordList) }} sx={{color: "black"}}>
                        <FeaturedPlayListIcon />
                    </IconButton>
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

                {wordList}

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
