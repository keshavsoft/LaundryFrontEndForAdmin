import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as Status500File } from "./AfterFetch/Status500File.js";

let StartFunc = async ({ inrowData }) => {

    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inrowData });

    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch({ inrowData });
    }

    if (jVarLocalDataNeeded.status === 500) {
        Status500File({ inrowData: await jVarLocalDataNeeded.text() });
    };
};

export { StartFunc };