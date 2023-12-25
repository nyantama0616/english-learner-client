import ArticleLib from "../ArticleLib";

describe('ArticleLib', () => {
    test("isAlphabet", () => {
        expect(ArticleLib.isAlphabet("a")).toEqual(true);
        expect(ArticleLib.isAlphabet("A")).toEqual(true);
        expect(ArticleLib.isAlphabet("-")).toEqual(true);
    });

    test("getChunks", () => {
        expect(ArticleLib.getChunks("")).toEqual([]);
        expect(ArticleLib.getChunks("apple")).toEqual([{ content: "apple", isWord: true }]);
        expect(ArticleLib.getChunks("apple-banana")).toEqual([{ content: "apple-banana", isWord: true }]);
        expect(ArticleLib.getChunks("apple banana.")).toEqual([{ content: "apple", isWord: true }, { content: " ", isWord: false }, { content: "banana", isWord: true }, { content: ".", isWord: false }]);
        expect(ArticleLib.getChunks("\"giant\", panda")).toEqual([{ content: "\"", isWord: false }, { content: "giant", isWord: true }, { content: "\", ", isWord: false }, { content: "panda", isWord: true }]);
        expect(ArticleLib.getChunks("It's good")).toEqual([{ content: "It", isWord: true }, { content: "'", isWord: false }, { content: "s", isWord: true }, { content: " ", isWord: false }, { content: "good", isWord: true }]);
    });

    test("split", () => {
        expect(ArticleLib.split("", / /)).toEqual([]);
        expect(ArticleLib.split("apple", / /)).toEqual(["apple"]);
        expect(ArticleLib.split("apple  \nbanana.", /[ \n]/)).toEqual(["apple", "  \n", "banana."]);
    });
});
