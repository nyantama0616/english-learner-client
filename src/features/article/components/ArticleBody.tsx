import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import ArticleLine from "./ArticleLine";
import ArticleLib from "../lib/ArticleLib";

interface ArticleBodyProps {
    body: string;
    sx?: SxProps;
}
export default function ArticleBody({ body, sx }: ArticleBodyProps) {
    const linesComponent = ArticleLib.split(body, /\n/).map((line, index) => {
        return <ArticleLine key={index} text={line} />
    });

    return (
        <Box
            className="article-body"
            sx={{
                ...sx,
            }}
        >
            {linesComponent}
        </Box>
    )
}
