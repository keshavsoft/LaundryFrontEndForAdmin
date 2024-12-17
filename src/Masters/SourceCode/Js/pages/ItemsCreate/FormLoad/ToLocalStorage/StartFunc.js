import { StartFunc as ToDataList } from "../ToDataList/entryFile.js";

const StartFunc = () => {
    if ("AllMastersData" in localStorage === false) {
        let jVarLocalHeaderToDataListId = document.getElementById('AllMastersHeaderId');
        jVarLocalHeaderToDataListId.click();
        ToDataList();
    };
};

export { StartFunc };
