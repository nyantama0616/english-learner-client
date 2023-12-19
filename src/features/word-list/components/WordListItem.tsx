import { Box, ListItemButton, ListItemText } from "@mui/material";

interface WordListItemProps {
    wordName: string;
}
export default function WordListItem({ wordName }: WordListItemProps) {
    return (
        <ListItemButton>
            <ListItemText primary={wordName} />
        </ListItemButton>
    )
}
