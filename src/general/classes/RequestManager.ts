    //こいつはjestでテストするのは難しいので、違う方法でテストする
import IRequestManager from '../interfaces/IRequestManager';
import axios from 'axios';

export default class RequestManager<Request, Response> implements IRequestManager<Request, Response> {
    public async get(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            axios.get(url, { params: data })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(null);
                });
        });
    }

    public async post(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            axios.post(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(null);
                });
        });
    }

    public async patch(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            axios.patch(url, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(null);
                });
        });
    }
}
