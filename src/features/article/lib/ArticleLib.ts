import WordChunk from "../interfaces/Chunk";

export namespace ArticleLib {
    export function getChunks(text: string): WordChunk[] {
        if (text.length === 0) return [];

        const chunks: WordChunk[] = [];
        let currentChunk: WordChunk = {
            content: text[0],
            isWord: isAlphabet(text[0]),
        };

        for (let i = 1; i < text.length; i++) {
            const char = text[i];
            const isAlpha = isAlphabet(char);

            if (isAlpha !== currentChunk.isWord) {
                chunks.push(currentChunk);
                currentChunk = {
                    content: "",
                    isWord: isAlpha,
                }
            }

            currentChunk.content += char;
            currentChunk.isWord = isAlpha;
        }

        if (currentChunk.content.length > 0) {
            chunks.push(currentChunk);
        }

        return chunks;
    }

    export function isAlphabet(char: string): boolean {
        return /^[a-zA-Z\-]$/.test(char);
    }

    export function split(text: string, separator: RegExp): string[] {
        if (text.length === 0) return [];
        const result: string[] = [];
        
        let str = text[0];
        let prevFlag = separator.test(text[0]);

        for (let i = 1; i < text.length; i++) {
            const char = text[i];
            const currentFlag = separator.test(char);
            if (currentFlag !== prevFlag) {
                result.push(str);
                str = "";
            }
            str += char;
            prevFlag = currentFlag;
        }

        if (str.length > 0) {
            result.push(str);
        }

        return result;
    }
}

export default ArticleLib;
