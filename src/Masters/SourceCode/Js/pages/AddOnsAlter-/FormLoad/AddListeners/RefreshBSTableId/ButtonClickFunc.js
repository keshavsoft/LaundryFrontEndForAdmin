import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
        let [a] = await Promise.all([Receipts()]);

        jVarGlobalPresentViewData = [...a];

        StartFuncAfterFetch();
  
};

export { StartFunc }