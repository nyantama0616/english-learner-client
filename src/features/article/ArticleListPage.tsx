import PageTemplate from "../../general/PageTemplate";
import ArticleList from "./components/ArticleList";
import { useDependency } from "../../general/contexts/useDependency";
import Article from "./components/Article";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";
import IArticle from "../../general/interfaces/IArticle";
import CloseButton from "../../general/components/CloseButton";

interface ArticleListPageProps {
    sx?: SxProps;
}
export default function ArticleListPage({ sx }: ArticleListPageProps) {
    const hook = useDependency().articleListHook;

    const articleComponent = hook.selectedArticlePos !== null && hook.selectedArticle !== null
        ? <ArticleWrapper
            article={hook.selectedArticle}
            onClose={hook.closeArticle}
            sx={{
                width: '80%',
                height: "800px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "lightblue",
            }}
        />
        : null;
    
    return (
        <PageTemplate className="article-list-page" sx={{ ...sx, position: "relative" }}>
            <h1>Article List</h1>
            <ArticleList articles={hook.fetchArticles.articles} onSelectArticle={hook.selectArticle} />
            {articleComponent}
        </PageTemplate>
    )
}

interface ArticleWrapperProps {
    article: IArticle;
    onClose(): void;
    sx?: SxProps;
}
function ArticleWrapper({ article, onClose, sx }: ArticleWrapperProps) {
    return (
        <Box sx={{ ...sx }}>
            <Article article={article} sx={{ width: "100%", height: "100%" }} />
            <CloseButton onClick={onClose} sx={{ position: "absolute", top: "0", right: "0" }} />
        </Box>
    )
}
