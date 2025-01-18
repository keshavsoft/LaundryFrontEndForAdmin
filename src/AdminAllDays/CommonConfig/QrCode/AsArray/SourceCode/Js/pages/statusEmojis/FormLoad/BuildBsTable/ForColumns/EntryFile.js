import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnBranchScan } from "./ColumnBranchScan/entryFile.js";
import { StartFunc as ColumnFactoryReturn } from "./ColumnFactoryReturn/entryFile.js";
import { StartFunc as ColumnProcessReturn } from "./ColumnProcessReturn/entryFile.js";
import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";
import { StartFunc as ColumnFFCScan } from "./ColumnFFCScan/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnBranchScan = LocalColumns.find(element => element.field === "BranchScan");

    let LocalColumnEntryScan = LocalColumns.find(element => element.field === "EntryScan");
    let LocalColumnWashingScan = LocalColumns.find(element => element.field === "WashingScan");
    let LocalColumnPressingScan = LocalColumns.find(element => element.field === "PressingScan");
    let LocalColumnCompletionScan = LocalColumns.find(element => element.field === "CompletionScan");
    let LocalColumnRewash = LocalColumns.find(element => element.field === "PressingRewash");
    let LocalColumnProcessReturn = LocalColumns.find(element => element.field === "PressingRejectScan");
    let LocalColumnFactoryReturn = LocalColumns.find(element => element.field === "EntryReturnScan");
    let LocalColumnFFCScan = LocalColumns.find(element => element.field === "FactoryToBranchScan");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };

    if (LocalColumnBranchScan === undefined === false) {
        ColumnBranchScan({ inFindColumn: LocalColumnBranchScan });
    };

    if (LocalColumnEntryScan === undefined === false) {
        ColumnBranchScan({ inFindColumn: LocalColumnEntryScan });
    };

    if (LocalColumnWashingScan === undefined === false) {
        ColumnBranchScan({ inFindColumn: LocalColumnWashingScan });
    };

    if (LocalColumnPressingScan === undefined === false) {
        ColumnBranchScan({ inFindColumn: LocalColumnPressingScan });
    };

    if (LocalColumnCompletionScan === undefined === false) {
        ColumnBranchScan({ inFindColumn: LocalColumnCompletionScan });
    };

    if (LocalColumnRewash === undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
    };

    if (LocalColumnProcessReturn === undefined === false) {
        ColumnProcessReturn({ inFindColumn: LocalColumnProcessReturn });
    };

    if (LocalColumnFactoryReturn === undefined === false) {
        ColumnFactoryReturn({ inFindColumn: LocalColumnFactoryReturn });
    };
    
    if (LocalColumnFFCScan === undefined === false) {
        ColumnFFCScan({ inFindColumn: LocalColumnFFCScan });
    };
};

export { StartFunc };