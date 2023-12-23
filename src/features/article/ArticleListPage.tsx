import PageTemplate from "../../general/PageTemplate";
import ArticleList from "./components/ArticleList";
import { useDependency } from "../../general/contexts/useDependency";

export default function ArticleListPage() {
    const hook = useDependency().articleListHook;

    return (
        <PageTemplate>
            <h1>Article List</h1>
            <ArticleList articles={hook.fetchArticles.articles} />
        </PageTemplate>
    )
}
