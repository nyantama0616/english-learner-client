import IWord from "../../../general/interfaces/IWord";

export type FetchArticleWordDictResponse = {
    words: {
        [word: string]: IWord;
    }
}

export default FetchArticleWordDictResponse;
