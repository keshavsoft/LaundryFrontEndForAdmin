import { StartFunc as StartFuncFuncToRun } from "./FetchAsGet/entryFile.js";


let StartFunc = () => {
    const arrClass = document.querySelectorAll(".RefreshBSTableClass");

    for (let i of arrClass) {
        i.addEventListener("click", StartFuncFuncToRun);
    };

};

export { StartFunc };