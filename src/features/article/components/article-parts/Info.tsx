import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useArticle } from "../../contexts/ArticleContext";
import { useMemo } from "react";
import ArticleLib from "../../lib/ArticleLib";

interface InfoProps {
    sx?: SxProps;
}
export default function Info({ sx }: InfoProps) {
    const { article, wordDict } = useArticle();
    // const freqWordCount = Object.values(wordDict).filter(word => word.statFrequency > 3.0).length;
    const wordCount = article === null ? 0 : ArticleLib.calcFreqWordCount(article, wordDict, 0);
    const freqWordCount = article === null ? 0 : ArticleLib.calcFreqWordCount(article, wordDict, 3.0);

    return (
        <Box sx={{ ...sx }}>
            <Typography variant="body1">
                タイトル: {article?.title}
            </Typography>
            
            <Typography variant="body1">
                総単語数: {wordCount}
            </Typography>
            
            <Typography variant="body1">
                頻出単語数: {freqWordCount}({(freqWordCount / wordCount * 100).toFixed(2)}%)
            </Typography>
        </Box>
    )
}
