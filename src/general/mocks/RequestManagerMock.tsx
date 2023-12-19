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
}

function getData(url: string) {
    switch (url) {
        case requests.fetchWords:
            return {
                words: [
                    {
                        id: 1,
                        word: 'apple',
                    },
                    {
                        id: 2,
                        word: 'banana',
                    },
                    {
                        id: 3,
                        word: 'orange',
                    }
                ]
            }
    }
}
