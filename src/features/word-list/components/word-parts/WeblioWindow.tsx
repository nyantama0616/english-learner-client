import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import IFrame from "react-iframe";
import requests from "../../../../general/requests";

interface WordViewerProps {
    wordName: string;
    sx?: SxProps;
}
export default function WeblioWindow({ wordName, sx }: WordViewerProps) {
    const url = requests.weblio(wordName);    

    /*
        TODO: weblioのページのエラーがコンソールに出力されるので、それをなんとかする
        多分どうにもならないｗ
    */
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
