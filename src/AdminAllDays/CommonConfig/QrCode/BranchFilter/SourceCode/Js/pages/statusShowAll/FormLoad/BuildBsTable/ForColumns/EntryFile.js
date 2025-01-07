import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";
import { StartFunc as ColumnEntryStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnWashingStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnPressingStatus } from "./ColumnStatus/entryFile.js";
import { StartFunc as ColumnCompletionStatus } from "./ColumnStatus/entryFile.js";




let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");
    let LocalColumnRate = LocalColumns.find(element => element.field === "Rate");
    let LocalColumnEntryStatus = LocalColumns.find(element => element.field === "EntryScan");
    let LocalColumnWashingStatus = LocalColumns.find(element => element.field === "WashingScan");
    let LocalColumnPressingStatus = LocalColumns.find(element => element.field === "PressingScan");
    let LocalColumnCompletionStatus = LocalColumns.find(element => element.field === "CompletionScan");


    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    if (LocalColumnRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalColumnRate });
    };

    if (LocalColumnEntryStatus === undefined === false) {
        ColumnEntryStatus({ inFindColumn: LocalColumnEntryStatus });
    };

    if (LocalColumnWashingStatus === undefined === false) {
        ColumnWashingStatus({ inFindColumn: LocalColumnWashingStatus });
    };

    if (LocalColumnPressingStatus === undefined === false) {
        ColumnPressingStatus({ inFindColumn: LocalColumnPressingStatus });
    }; 
    
    if (LocalColumnCompletionStatus === undefined === false) {
        ColumnCompletionStatus({ inFindColumn: LocalColumnCompletionStatus });
    };
};

export { StartFunc };