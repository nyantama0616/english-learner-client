import { Box, Grid, TextField, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import IArticle from "../../../general/interfaces/IArticle";
import ICreateArticle from "../interfaces/ICreateArticle";
import ArticleBody from "./article-parts/Body";

interface CreateArticleProps {
    createArticle: ICreateArticle;
    sx?: SxProps;
}
export default function CreateArticle({ createArticle, sx }: CreateArticleProps) {
    return (
        <Box className="create-article" sx={{ ...sx }}>
            <form>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10}>
                        <TextField
                            fullWidth
                            label="Title"
                            onChange={createArticle.handler.onChangeTitle}
                            value={createArticle.data.title}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            fullWidth
                            label="Body"
                            onChange={createArticle.handler.onChangeBody}
                            value={createArticle.data.body}
                            multiline
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" onClick={createArticle.create}>Create</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
