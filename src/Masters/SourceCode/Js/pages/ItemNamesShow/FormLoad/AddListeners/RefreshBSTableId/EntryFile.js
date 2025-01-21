import { StartFunc as StartFuncFetchasGet } from "./FetchasGet/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("RefreshBSTableId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFetchasGet);
    };
};

export { StartFunc };