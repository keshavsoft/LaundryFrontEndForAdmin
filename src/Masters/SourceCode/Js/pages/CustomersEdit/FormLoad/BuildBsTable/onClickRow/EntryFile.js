import { StartFunc as StartFuncNav } from "./Nav/EntryFile.js";
const StartFunc = (row, $element, field) => {
    console.log("row : ", row);
    // console.log("Sandeep");
    
    if (field === "Ks-Opt") {
        StartFuncNav({ inRowpk: row.UuId });
    };
};

export { StartFunc };