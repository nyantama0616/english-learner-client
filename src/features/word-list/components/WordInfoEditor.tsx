import { Box, Grid, TextField } from "@mui/material";
import { SxProps } from "@mui/system";
import { useEffect } from "react";
import IWord from "../../../general/interfaces/IWord";
import IWordInfoEditorHook from "../interfaces/IWordInfoEditorHook";

interface WordInfoEditorProps {
    word: IWord;
    hook: IWordInfoEditorHook;
    sx?: SxProps;
}
export default function WordInfoEditor({ word, hook, sx }: WordInfoEditorProps) {
    return (
        <Box sx={{ ...sx }}>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <h1>{word.word}</h1>
                </Grid>
                
                <Grid item xs={10}>
                    <form>
                        <TextField
                            label="意味"
                            value={hook.data.meaning}
                            onChange={hook.onMeaningChange}
                            variant="outlined"
                            fullWidth
                        />
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}
