import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    StartFuncForColumns({ inColumns: optionsJson.columns })
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

