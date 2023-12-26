import { Box, Grid, TextField, Checkbox } from "@mui/material";
import { SxProps } from "@mui/system";
import { useWord } from "../../contexts/WordContext";

interface WordInfoEditorProps {
    sx?: SxProps;
}
export default function WordInfoEditor({ sx }: WordInfoEditorProps) {
    const { word, wordInfoEditorHook } = useWord();
    
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
                        checked={wordInfoEditorHook.data.reported}
                        onChange={wordInfoEditorHook.onReportedChange}
                    />
                </Grid>
                
                <Grid item xs={10}>
                    <form>
                        <TextField
                            label="意味"
                            value={wordInfoEditorHook.data.meaning}
                            onChange={wordInfoEditorHook.onMeaningChange}
                            variant="outlined"
                            fullWidth
                        />
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}
