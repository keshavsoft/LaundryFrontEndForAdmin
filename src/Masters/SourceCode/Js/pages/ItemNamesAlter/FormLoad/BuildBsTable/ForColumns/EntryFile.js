import ColumnsJson from './columns.json' with {type: 'json'};
import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnopts = LocalColumns.find(element => element.field === "KS-Opts");
    
    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };
}

export { StartFunc };