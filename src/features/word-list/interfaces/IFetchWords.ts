import IWord from "../../../general/interfaces/IWord";
import BasicStatus from "../../../general/types/BasicStatus";

export default interface IFetchWords {
    status: BasicStatus
    words: IWord[]
    fetch(): Promise<void>
}
