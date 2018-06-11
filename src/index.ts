import {Tabander} from "./tabander/tabander";
import {PathService} from "./share/paths.service";

const pathService = new PathService();
const tabander = new Tabander(pathService);
tabander.onInit();