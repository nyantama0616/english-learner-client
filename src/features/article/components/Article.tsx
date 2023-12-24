import { Box, Typography } from "@mui/material";
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
            <Typography variant="h1" fontSize="3rem">{article.title}</Typography>
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
