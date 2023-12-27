import IArticle from "../../../general/interfaces/IArticle";
import BasicStatus from "../../../general/types/BasicStatus";
import IWord from "../../../general/interfaces/IWord";

export default interface IFetchOneArticle {
    status: BasicStatus;
    data: Data;
    fetch(id: number): Promise<void>;
}

export type Data = {
    article: IArticle | null;
    wordDict: {
        [word: string]: IWord;
    };
    words: IWord[]
}
