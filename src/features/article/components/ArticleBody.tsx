import { Box, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useMemo } from "react";
interface ArticleBodyProps {
    body: string;
    sx?: SxProps;
}
export default function ArticleBody({ body, sx }: ArticleBodyProps) {
    const lines: Line[] = useMemo(() => {
        // const lines = body.split("\n");
        const lines: string[] = body.match(/(.*?(\n|$))/g) || [];
        return lines.map(line => {
            let text: string;
            let type: LineType;
            if (line.startsWith("# ")) {
                text = line.replace("# ", "");
                type = "h1";
            } else if (line.startsWith("## ")) {
                text = line.replace("## ", "");
                type = "h2";
            } else if (line.startsWith("### ")) {
                text = line.replace("### ", "");
                type = "subtitle2";
            } else {
                text = line;
                type = "body1";
            }

            console.log(text, type);
            

            return { text, type };
        });
    }, [body]);

    const linesComponent = lines.map((line, index) => {
        if (line.text === "\n") {
            return <br key={index} />
        }

        const textAlign = line.type === "body1" ? "left" : "center";
        const fontSize = line.type === "body1" ? "1.2rem" : "2rem";
        return (
            <Typography
                key={index}
                variant={line.type}
                textAlign={textAlign}
                fontSize={fontSize}
            >
                {line.text}
            </Typography>
        )
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

interface Line {
    text: string;
    type: LineType;
}

type LineType = "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle1" | "subtitle2" | "body1";
