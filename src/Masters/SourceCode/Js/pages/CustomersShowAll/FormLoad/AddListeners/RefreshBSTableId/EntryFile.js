// import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";
import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("RefreshBSTableId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFetchAsGet);
    };
};

export { StartFunc };