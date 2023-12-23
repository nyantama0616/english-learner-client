import { ListItemButton, ListItemText } from "@mui/material";

interface ArticleListItemProps {
    articleTitle: string;
    onClick: () => void;
}
export default function ArticleListItem({ articleTitle, onClick }: ArticleListItemProps) {
    return (
        <ListItemButton onClick={onClick}>
            <ListItemText primary={articleTitle} />
        </ListItemButton>
    )
}
