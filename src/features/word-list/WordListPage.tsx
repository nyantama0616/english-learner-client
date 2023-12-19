import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";
import WordList from "./components/WordList";

interface WordListPageProps {
    sx?: SxProps;
}
export default function WordListPage({ sx }: WordListPageProps) {
    return (
        <PageTemplate className="home-page" sx={sx}>
            <h1>Word List</h1>
            <WordList sx={{ backgroundColor: "#eeeeee" }} />
        </PageTemplate>
    )
}
