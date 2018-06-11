import {Paths} from "./interfaces/paths";

export class PathService implements Paths{
    public getRedirectPath(): Promise<string> {
        //here could be async request tot server
        return new Promise((resolve, reject) => {
            resolve('https://google.com');
        });
    }
}