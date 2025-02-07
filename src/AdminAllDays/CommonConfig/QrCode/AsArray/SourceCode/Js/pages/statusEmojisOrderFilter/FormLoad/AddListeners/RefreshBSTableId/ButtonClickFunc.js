// import { StartFunc as Receipts } from "./Receipts/Entry.js";
// import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    StartFuncFetchAsGet().then();
};

export { StartFunc }