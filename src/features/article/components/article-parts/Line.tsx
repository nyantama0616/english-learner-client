import { Typography } from '@mui/material';
import ArticleLib from '../../lib/ArticleLib';
import ArticleWord from './Word';

type LineType = "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle1" | "subtitle2" | "body1";

interface LineProps {
    text: string;
}
export default function Line({ text }: LineProps) {
    if (text === "\n") {
        return <br />
    }

    let displayText: string;
    let type: LineType;
    if (text.startsWith("# ")) {
        displayText = text.replace("# ", "");
        type = "h1";
    } else if (text.startsWith("## ")) {
        displayText = text.replace("## ", "");
        type = "h2";
    } else if (text.startsWith("### ")) {
        displayText = text.replace("### ", "");
        type = "subtitle2";
    } else {
        displayText = text;
        type = "body1";
    }

    const wordComponents = ArticleLib.getChunks(displayText).map(({ content, isWord }, index) => {
        if (isWord) {
            return <ArticleWord key={index} displayWord={content} />
        } else {
            return <span key={index}>{content}</span>
        }
    });

    const textAlign = type === "body1" ? "left" : "center";
    const fontSize = type === "body1" ? "1.2rem" : "2rem";

    return (
        <Typography
            variant={type}
            textAlign={textAlign}
            fontSize={fontSize}
        >
            {/* {displayText} */}
            {wordComponents}
        </Typography>
    )
}
