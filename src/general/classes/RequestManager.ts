    //こいつはjestでテストするのは難しいので、違う方法でテストする
import IRequestManager from '../interfaces/IRequestManager';
import axios from 'axios';

export default class RequestManager<Request, Response> implements IRequestManager<Request, Response> {
    public async get(url: string, data?: Request): Promise<Response | null> {
        console.log("get");
        console.log(url);
        
        
        return new Promise<Response | null>((resolve, reject) => {
            axios.get(url, { params: data })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public async post(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            reject(null);
        });
    }

    public async patch(url: string, data?: Request): Promise<Response | null> {
        return new Promise<Response | null>((resolve, reject) => {
            resolve(null);
        });
    }
}
