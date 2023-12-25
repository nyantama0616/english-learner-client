import { useArticle } from "../../contexts/ArticleContext";
import { Button, Tooltip } from "@mui/material";
import WordInfo from "./WordInfo";

interface WordProps {
    displayWord: string;
}
export default function Word({ displayWord }: WordProps) {
    const { wordDict } = useArticle();
    const wordInfo = wordDict[displayWord.toLowerCase()];

    const wordInfoComponent = wordInfo ? <WordInfo word={wordInfo} sx={{ minWidth: "100px", height: "100px"}} /> : null;

    const style = {
        padding: 0,
        margin: 0,
        minWidth: 0,
        fontSize: "20px",
        textTransform: "none",
        // color: "black",
    }

    if (wordInfo) {
        return (
            <Tooltip title={wordInfoComponent}>
                <Button sx={{ ...style }}>{displayWord}</Button>
            </Tooltip>
        )
    } else {
        return (
            <>{displayWord} </>
        )
    }
}
