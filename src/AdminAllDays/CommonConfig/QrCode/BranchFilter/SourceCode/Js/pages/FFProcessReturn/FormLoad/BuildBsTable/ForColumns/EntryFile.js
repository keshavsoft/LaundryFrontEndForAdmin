import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnStatus } from "./ColumnStatus/entryFile.js";



let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnStatus = LocalColumns.find(element => element.field === "F_F_Pressing_Return_Scan");



    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnStatus === undefined === false) {
        ColumnStatus({ inFindColumn: LocalColumnStatus });
    };
};

export { StartFunc };