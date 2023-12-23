export default class Article {
    id: number;
    title: string;
    body: string;
    wordCount: number;
    
    constructor(id: number, title: string, body: string, wordCount: number) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.wordCount = wordCount;
    }
}
