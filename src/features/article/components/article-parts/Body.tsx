import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import ArticleLine from "./Line";
import ArticleLib from "../../lib/ArticleLib";

interface BodyProps {
    body: string;
    sx?: SxProps;
}
export default function Body({ body, sx }: BodyProps) {
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
