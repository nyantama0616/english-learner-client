import BasicStatus from "../../../general/types/BasicStatus";

export default interface ICreateArticle {
    status: BasicStatus;
    create(title: string, body: string): Promise<void>;
}
