import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnBranchScan } from "./ColumnBranchScan/entryFile.js";
import { StartFunc as ColumnEntryScan } from "./ColumnEntryScan/entryFile.js";
import { StartFunc as ColumnWashingScan } from "./ColumnWashingScan/entryFile.js";
import { StartFunc as ColumnPressingScan } from "./ColumnPressingScan/entryFile.js";
import { StartFunc as ColumnCompletionScan } from "./ColumnCompletionScan/entryFile.js";
import { StartFunc as ColumnEntryReturn } from "./ColumnEntryReturn/entryFile.js";
import { StartFunc as ColumnProcessReturn } from "./ColumnProcessReturn/entryFile.js";
import { StartFunc as ColumnRewash } from "./ColumnRewash/entryFile.js";
import { StartFunc as ColumnFFEScan } from "./ColumnFFEScan/entryFile.js";
import { StartFunc as ColumnFFPScan } from "./ColumnFFPScan/entryFile.js";
import { StartFunc as ColumnFFCScan } from "./ColumnFFCScan/entryFile.js";
import { StartFunc as ColumnDelivery } from "./ColumnDelivery/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnBranchScan = LocalColumns.find(element => element.field === "BranchScan");

    let LocalColumnEntryScan = LocalColumns.find(element => element.field === "EntryScan");
    let LocalColumnWashingScan = LocalColumns.find(element => element.field === "WashingScan");
    let LocalColumnPressingScan = LocalColumns.find(element => element.field === "PressingScan");
    let LocalColumnCompletionScan = LocalColumns.find(element => element.field === "CompletionScan");

    let LocalColumnEntryReturn = LocalColumns.find(element => element.field === "EntryReturnScan");
    let LocalColumnProcessReturn = LocalColumns.find(element => element.field === "PressingRejectScan");
    let LocalColumnRewash = LocalColumns.find(element => element.field === "PressingRewash");
    let LocalColumnFFEScan = LocalColumns.find(element => element.field === "F_F_Entry_Return_Scan");
    let LocalColumnFFPScan = LocalColumns.find(element => element.field === "F_F_Pressing_Return_Scan");
    let LocalColumnFFCScan = LocalColumns.find(element => element.field === "FactoryToBranchScan");
    let LocalColumnDelivery = LocalColumns.find(element => element.field === "To_Delivery_Scan");


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
        ColumnEntryScan({ inFindColumn: LocalColumnEntryScan });
    };

    if (LocalColumnWashingScan === undefined === false) {
        ColumnWashingScan({ inFindColumn: LocalColumnWashingScan });
    };

    if (LocalColumnPressingScan === undefined === false) {
        ColumnPressingScan({ inFindColumn: LocalColumnPressingScan });
    };

    if (LocalColumnCompletionScan === undefined === false) {
        ColumnCompletionScan({ inFindColumn: LocalColumnCompletionScan });
    };
    if (LocalColumnEntryReturn === undefined === false) {
        ColumnEntryReturn({ inFindColumn: LocalColumnEntryReturn });
    };
    
    if (LocalColumnProcessReturn === undefined === false) {
        ColumnProcessReturn({ inFindColumn: LocalColumnProcessReturn });
    };
    
    if (LocalColumnRewash === undefined === false) {
        ColumnRewash({ inFindColumn: LocalColumnRewash });
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

    if (LocalColumnDelivery === undefined === false) {
        ColumnDelivery({ inFindColumn: LocalColumnDelivery });
    };
};

export { StartFunc };