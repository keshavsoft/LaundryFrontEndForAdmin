import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnReturn } from "./ColumnReturn/entryFile.js";
import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnStatus = LocalColumns.find(element => element.field === "PressingScan");
    let LocalColumnReturn = LocalColumns.find(element => element.field === "PressingRejectScan");
    let LocalColumnRewash = LocalColumns.find(element => element.field === "PressingRewash");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };
    if (LocalColumnStatus === undefined === false) {
        ColumnStatus({ inFindColumn: LocalColumnStatus });
    };
    if (LocalColumnReturn === undefined === false) {
        ColumnReturn({ inFindColumn: LocalColumnReturn });
    };
    if (LocalColumnRewash === undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
    };
};

export { StartFunc };