import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncForColumns } from "./ForColumns/EntryFile.js";
const StartFunc = () => {
    var $table = $('#table');
    StartFuncForColumns({ inColumns: optionsJson.columns })
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

