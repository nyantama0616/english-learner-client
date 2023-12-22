const requests = {
    fetchWords: "http://localhost:3000/v1/words",
    updateWords: "http://localhost:3000/v1/words",
    // weblio: (word: string) => `http://localhost:3000/v1/weblio/${word}`,
    weblio: (word: string) => `https://ejje.weblio.jp/content/${word}`,
    devs: {
        ping: "http://localhost:3000/v1/devs/ping",
    },
}

export default requests;
