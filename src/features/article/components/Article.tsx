import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IArticle from "../../../general/interfaces/IArticle";
import ArticleBody from "./ArticleBody";

interface ArticleProps {
    article: IArticle;
    sx?: SxProps;
}
export default function Article({ article, sx }: ArticleProps) {
    return (
        <Box className="article" sx={{ ...sx }}>
            <h1>{article.title}</h1>
            <ArticleBody body={article.body} />
        </Box>
    )
}
