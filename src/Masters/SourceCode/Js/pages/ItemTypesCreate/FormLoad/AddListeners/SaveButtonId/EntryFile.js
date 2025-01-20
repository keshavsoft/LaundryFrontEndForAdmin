// import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncFetchAsPost } from "./FetchAsPost/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("SaveButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFetchAsPost);
    };
};

export { StartFunc };