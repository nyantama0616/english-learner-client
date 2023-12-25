import { useArticle } from "../contexts/ArticleContext";
import { Button } from "@mui/material";

interface ArticleWordProps {
    displayWord: string;
}
export default function ArticleWord({ displayWord }: ArticleWordProps) {
    const { wordDict } = useArticle();
    const wordInfo = wordDict[displayWord.toLowerCase()];

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
            <Button sx={{ ...style }}>{displayWord}</Button>
        )
    } else {
        return (
            <>{displayWord} </>
        )
    }
}
