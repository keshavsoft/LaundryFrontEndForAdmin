import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const $table = $('#table');

const StartFunc = () => {
    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

