import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";

interface HomePageProps {
    sx?: SxProps;
}
export default function HomePage({ sx }: HomePageProps) {
    return (
        <PageTemplate className="home-page" sx={sx}>
            <h1>Home</h1>
        </PageTemplate>
    )
}
