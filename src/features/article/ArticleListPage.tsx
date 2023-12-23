import PageTemplate from "../../general/PageTemplate";
import ArticleList from "./components/ArticleList";
import { useDependency } from "../../general/contexts/useDependency";
import Article from "./components/Article";
import { SxProps } from "@mui/system";

interface ArticleListPageProps {
    sx?: SxProps;
}
export default function ArticleListPage({ sx }: ArticleListPageProps) {
    const hook = useDependency().articleListHook;

    const articleComponent = hook.selectedArticlePos !== null
        ? <Article
            article={hook.fetchArticles.articles[hook.selectedArticlePos]}
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
