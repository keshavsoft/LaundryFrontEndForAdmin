import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
// import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";
const StartFunc = async () => {
    // StartFuncFromUrlParams();
    StartFuncAddListeners();
    UserDetails();
    ToDataList();
    // ShowOnDom();

};

export { StartFunc };