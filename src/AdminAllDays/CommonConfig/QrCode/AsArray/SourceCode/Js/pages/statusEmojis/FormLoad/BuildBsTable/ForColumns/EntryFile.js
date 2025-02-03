import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnBranchScan } from "./ColumnEmojiScan/entryFile.js";
import { StartFunc as ColumnFactoryReturn } from "./ColumnEmojiScan/entryFile.js";
import { StartFunc as ColumnProcessReturn } from "./ColumnEmojiScan/entryFile.js";
import { StartFunc as ColumnRewash } from "./ColumnEmojiScan/entryFile.js";
import { StartFunc as ColumnFFEScan } from "./ColumnEmojiScan/entryFile.js";
import { StartFunc as ColumnFFPScan } from "./ColumnEmojiScan/entryFile.js";
import { StartFunc as ColumnFFCScan } from "./ColumnEmojiScan/entryFile.js";

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
    let LocalColumnFFEScan = LocalColumns.find(element => element.field === "F_F_Entry_Return_Scan");
    let LocalColumnFFPScan = LocalColumns.find(element => element.field === "F_F_Pressing_Return_Scan");
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
    
    if (LocalColumnFFEScan === undefined === false) {
        ColumnFFEScan({ inFindColumn: LocalColumnFFEScan });
    };

    if (LocalColumnFFPScan === undefined === false) {
        ColumnFFPScan({ inFindColumn: LocalColumnFFPScan });
    };

    if (LocalColumnFFCScan === undefined === false) {
        ColumnFFCScan({ inFindColumn: LocalColumnFFCScan });
    };
};

export { StartFunc };