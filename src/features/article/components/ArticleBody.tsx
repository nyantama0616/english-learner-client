import { Box } from "@mui/material";
import { SxProps } from "@mui/system";

interface ArticleBodyProps {
    body: string;
    sx?: SxProps;
}
export default function ArticleBody({ body, sx }: ArticleBodyProps) {
    return (
        <Box className="article-body" sx={{ ...sx }}>
            <p>{ body }</p>
        </Box>
    )
}
