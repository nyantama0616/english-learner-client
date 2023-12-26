import { Box, Grid, TextField, Checkbox } from "@mui/material";
import { SxProps } from "@mui/system";
import { useEffect } from "react";
import { useWord } from "../../contexts/WordContext";

interface WordInfoEditorProps {
    sx?: SxProps;
}
export default function WordInfoEditor({ sx }: WordInfoEditorProps) {
    const { word, updateWords } = useWord();

    return (
        <Box sx={{ ...sx }}>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <h1>{word?.word}</h1>
                </Grid>
                
                <Grid item xs={10}>
                    <h3>{word?.statFrequency}</h3>
                </Grid>
                
                <Grid item xs={2}>
                    <Checkbox
                        checked={updateWords.wordInfoEditor.data.reported}
                        onChange={updateWords.wordInfoEditor.onReportedChange}
                    />
                </Grid>
                
                <Grid item xs={10}>
                    <form>
                        <TextField
                            label="意味"
                            value={updateWords.wordInfoEditor.data.meaning}
                            onChange={updateWords.wordInfoEditor.onMeaningChange}
                            variant="outlined"
                            fullWidth
                        />
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}
