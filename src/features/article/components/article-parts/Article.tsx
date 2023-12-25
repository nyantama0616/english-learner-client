import { Box, Grid, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import IArticle from "../../../../general/interfaces/IArticle";
import ArticleBody from "./Body";
import CopyButton from "./CopyButton";
import { useArticle } from "../../contexts/ArticleContext";

interface ArticleProps {
    sx?: SxProps;
}
export default function Article({ sx }: ArticleProps) {
    const { article, copyArticle } = useArticle();
    if (article === null) return null;

    return (
        <Box className="article" sx={{ ...sx }}>
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
        </Box>
    )
}
