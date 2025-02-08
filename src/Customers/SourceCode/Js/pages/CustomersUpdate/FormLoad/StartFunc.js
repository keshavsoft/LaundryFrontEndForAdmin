import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";


const StartFunc = async () => {
    
    StartFuncAddListeners();
    ShowOnDom();
    UserDetails()
};

export { StartFunc };
