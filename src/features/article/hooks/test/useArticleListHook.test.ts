import { renderHook } from "@testing-library/react";
import useArticleListHook from "../useArticleListHook";
import RequestManagerMock from "../../../../general/mocks/RequestManagerMock";
import { act } from "react-dom/test-utils";
import useFetchArticles from "../useFetchArticles";
import useFetchOneArticle from "../useFetchOneArticle";
import useCreateArticle from "../useCreateArticle";
import FetchOneArticleRequest from "../../types/FetchOneArticleRequest";
import FetchArticlesRequest from "../../types/FetchArticlesRequest";
import FetchArticlesResponse from "../../types/FetchArticlesResponse";
import FetchOneArticleResponse from "../../types/FetchOneArticleResponse";
import CreateArticleRequest from "../../types/CreateArticleRequest";
import CreateArticleResponse from "../../types/CreateArticleResponse";
import IArticleListHook from "../../interfaces/IArticleListHook";

describe('useArticleListHook', () => {
    let result: { current: IArticleListHook; } = null!;
    beforeEach(async () => {
        result = renderHook(() => {
            const fetchArticles = useFetchArticles(RequestManagerMock);
            const fetchOneArticle = useFetchOneArticle(RequestManagerMock);
            const createArticle = useCreateArticle(RequestManagerMock);
            return useArticleListHook(fetchArticles, fetchOneArticle, createArticle);
        }).result;

        await act(async () => {
            await result.current.fetchArticles.fetch();
        });
    });

    test('fetchArticles', async () => {
        expect(result.current.fetchArticles.articles).toEqual([
            { id: 0, title: 'title0', wordCount: 1 },
            { id: 1, title: 'title1', wordCount: 1 },
            { id: 2, title: 'title2', wordCount: 1 },
        ]);
    });

    test('selectArticle', async () => {
        await act(async () => {
            result.current.selectArticle(1);
        });
        
        expect(result.current.selectedArticlePos).toEqual(1);
        expect(result.current.selectedArticle).toEqual({ id: 1, title: 'title1', body: 'body1', wordCount: 1 });
        
        await act(async () => {
            result.current.selectArticle(null);
        });
        expect(result.current.selectedArticlePos).toEqual(null);
    });

    test('closeArticle', async () => {
        await act(async () => {
            result.current.closeArticle();
        });
        
        expect(result.current.selectedArticlePos).toEqual(null);
    });

    test('selectArticle with invalid pos', async () => {
        const prevPos = result.current.selectedArticlePos;

        await act(async () => {
            result.current.selectArticle(999);
        });
        expect(result.current.selectedArticlePos).toEqual(prevPos);
        
        await act(async () => {
            result.current.selectArticle(-999);
        });
        expect(result.current.selectedArticlePos).toEqual(prevPos);
    });

    test('openCreateArticle', async () => {
        await act(async () => {
            result.current.openCreateArticle();
        });
        expect(result.current.displayFlag.createArticle).toEqual(true);
    });

    test('closeCreateArticle', async () => {
        await act(async () => {
            result.current.closeCreateArticle();
        });
        expect(result.current.displayFlag.createArticle).toEqual(false);
    });
});
