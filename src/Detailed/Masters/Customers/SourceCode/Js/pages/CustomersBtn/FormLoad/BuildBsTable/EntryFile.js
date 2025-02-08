import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";
// import { StartFunc as NewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    ForColumns({ inColumns: optionsJson.columns });
    optionsJson.onClickRow = onClickRow;
    // optionsJson.NewOrderButtonId = NewOrderButtonId;
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

