import IWord from "../../../general/interfaces/IWord";

export type FetchArticleWordsResponse = {
    words: {
        [word: string]: IWord;
    }
}

export default FetchArticleWordsResponse;
