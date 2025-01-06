import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = async () => {
    StartFuncFromUrlParams();
    StartFuncAddListeners();

    ToDataList();
};

export { StartFunc };
