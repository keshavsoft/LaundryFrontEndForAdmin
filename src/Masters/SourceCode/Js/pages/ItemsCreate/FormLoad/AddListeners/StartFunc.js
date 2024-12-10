import { StartFunc as SaveButtonId } from "./SaveButtonId/EntryFile.js";

let StartFunc = () => {
    let jVarLocalRate=document.getElementById("DryWashRate");
    let jVarLocalPics=document.getElementById("Pcs");
    if(jVarLocalRate.value!="" && jVarLocalRate.value>0 && jVarLocalPics.value!="" && jVarLocalPics.value>0 )
    {
        SaveButtonId();
    }
};

export { StartFunc };