import { StartFunc as ShowOnDom } from "./ShowOnDom/StartFunc.js";
import { StartFunc as DynamiActivity } from "./DynamiActivity/entryFile.js";


const StartFunc = async () => {
    DynamiActivity()
    ShowOnDom();
};

export { StartFunc };
