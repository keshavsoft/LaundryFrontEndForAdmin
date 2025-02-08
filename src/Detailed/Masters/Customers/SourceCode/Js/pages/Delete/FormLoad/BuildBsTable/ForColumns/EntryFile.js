import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnopts = LocalColumns.find(element => element.field === "Delete");
    
    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };
}

export { StartFunc };