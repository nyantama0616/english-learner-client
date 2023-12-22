import IWord from "../../../general/interfaces/IWord";
import BasicStatus from "../../../general/types/BasicStatus";
import FetchWordsRequest from "../types/FetchWordsRequest";

export default interface IFetchWords {
    status: BasicStatus
    words: IWord[]
    fetch(params: FetchWordsRequest): Promise<void>
}
