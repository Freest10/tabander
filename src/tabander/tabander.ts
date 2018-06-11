import {ShareEvents} from "../share/share-events";
import {TabanderImpl} from "./interfaces/tabander";
import {PathService} from "../share/paths.service";

export class Tabander implements TabanderImpl, OnInit{

    constructor(private pathService: PathService){
    }

    public onInit(): void {
        ShareEvents.clickOrTouchDocument(this.callBack.bind(this));
    }

    public openTab(path: string): void{
        window.open(path);
    }

    private callBack(event): void {
        this.pathService.getRedirectPath().then((path)=>{
            this.openTab(path);
        });
    }
}