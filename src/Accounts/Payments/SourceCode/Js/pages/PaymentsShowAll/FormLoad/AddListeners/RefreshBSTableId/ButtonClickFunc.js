import { StartFunc as Receipts } from "./Receipts/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    try {
        let [a] = await Promise.all([Receipts()]);

        StartFuncAfterFetch({ inData: [...a] });
    } catch (e) {
        console.log("error from Promise all : ", e);
        alert("No Data");
    };
};

export { StartFunc }