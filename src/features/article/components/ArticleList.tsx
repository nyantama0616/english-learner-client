import { Box, List } from '@mui/material';
import { SxProps } from '@mui/system';
import IArticle from '../../../general/interfaces/IArticle';
import ArticleListItem from './ArticleListItem';

interface ArticleListProps {
    articles: IArticle[]
    onSelectArticle: (pos: number) => void;
    sx?: SxProps;
}
export default function ArticleList({ articles, onSelectArticle ,sx }: ArticleListProps) {
    const items = articles.map((article, i) => <ArticleListItem key={i.toString()} articleTitle={article.title} onClick={() => { onSelectArticle(i) }} />);
    
    return (
        <Box sx={{ ...sx, overflowY: "scroll" }}>
            <List>
                {items}
            </List>
        </Box>
    )
}
