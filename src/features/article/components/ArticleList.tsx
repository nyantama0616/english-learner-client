import { Box, List } from '@mui/material';
import { SxProps } from '@mui/system';
import IArticle from '../../../general/interfaces/IArticle';
import ArticleListItem from './ArticleListItem';

interface ArticleListProps {
    articles: IArticle[]
    sx?: SxProps;
}
export default function ArticleList({ articles, sx }: ArticleListProps) {
    const items = articles.map((article, i) => <ArticleListItem key={i.toString()} articleTitle={article.title} onClick={() => { }} />);
    
    return (
        <Box sx={{ ...sx }}>
            <List>
                {items}
            </List>
        </Box>
    )
}
