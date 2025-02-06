import { StartFunc as StartFuncColumnopts } from "./Columnopts/entryFile.js";
import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnopts = LocalColumns.find(element => element.field === "Delete");
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");

    if (LocalColumnopts === undefined === false) {
        StartFuncColumnopts({ inFindColumn: LocalColumnopts });
    };

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
}

export { StartFunc };
