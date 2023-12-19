import { Box, ListItemButton, ListItemText } from "@mui/material";

interface WordListItemProps {
    wordName: string;
    onClick: () => void;
}
export default function WordListItem({ wordName, onClick }: WordListItemProps) {
    return (
        <ListItemButton onClick={ onClick }>
            <ListItemText primary={wordName} />
        </ListItemButton>
    )
}
