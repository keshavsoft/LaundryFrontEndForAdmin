import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";

const StartFunc = async () => {    
    StartFuncAddListeners();
    UserDetails();
    ToDataList();
};

export { StartFunc };
