const requests = {
    fetchWords: "http://localhost:3000/v1/words",
    updateWords: "http://localhost:3000/v1/words",
    fetchArticles: "http://localhost:3000/v1/articles",
    fetchOneArticle: (id: number) => `http://localhost:3000/v1/articles/${id}`,
    fetchArticleWordDict: (id: number) => `http://localhost:3000/v1/articles/${id}/word_dict`,
    createArticle: "http://localhost:3000/v1/articles",
    // weblio: (word: string) => `http://localhost:3000/v1/weblio/${word}`,
    weblio: (word: string) => `https://ejje.weblio.jp/content/${word}`,
    devs: {
        ping: "http://localhost:3000/v1/devs/ping",
    },
}

export default requests;
