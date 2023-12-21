//こいつはjestでテストするのは難しいので、違う方法でテストする
import IRequestManager from '../interfaces/IRequestManager';
import requests from '../requests';

export default class RequestManagerMock<Request, Response> implements IRequestManager<Request, Response> {
    public async get(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            const data: any = getData(url);
            resolve(data);
        });
    }

    public async post(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            reject(null);
        });
    }

    public async patch(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            if (url === requests.updateWords) {
                console.log('updateWords!');
                console.log(data);
            }
            resolve(null);
        });
    }
}

function getData(url: string) {
    switch (url) {
        case requests.fetchWords:
            return {
                words: [
                    {
                        id: 1,
                        word: 'apple',
                        realFrequency: 100,
                        statFrequency: 100,
                        pronunciation: 'apple',
                        meaning: 'りんご',
                    },
                    {
                        id: 2,
                        word: 'banana',
                        realFrequency: 100,
                        statFrequency: 100,
                        pronunciation: 'apple',
                        meaning: 'ばなな',
                    },
                    {
                        id: 3,
                        word: 'orange',
                        realFrequency: 100,
                        statFrequency: 100,
                        pronunciation: 'apple',
                        meaning: 'おれんじ',
                    }
                ]
            }
    }
}
