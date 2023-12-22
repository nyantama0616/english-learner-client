import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import PageTemplate from "../../general/PageTemplate";
import { useEffect } from "react";
import RequestManager from "../../general/classes/RequestManager";
import requests from "../../general/requests";
interface HomePageProps {
    sx?: SxProps;
}
export default function HomePage({ sx }: HomePageProps) {
    const requestManager = new RequestManager<null, {message: string}>();
    useEffect(() => {
        requestManager
            .get(requests.devs.ping, null)
            .then(res => {
                console.log(res);
            });
    }, []);

    return (
        <PageTemplate className="home-page" sx={sx}>
            <h1>Home</h1>

        </PageTemplate>
    )
}
