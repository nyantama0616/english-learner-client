import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IFrame from "react-iframe";

interface WordViewerProps {
    wordName: string;
    sx?: SxProps;
}
export default function WeblioWindow({ wordName, sx }: WordViewerProps) {
    const url = `https://ejje.weblio.jp/content/${wordName}`;

    return (
        <Box sx={{ ...sx }}>
            <IFrame
                url={url}
                width="100%"
                height="100%"
            />
        </Box>
    )
}
