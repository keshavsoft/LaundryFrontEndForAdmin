import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = async ({ inrowData }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inrowData });

    let LocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `${ConfigJson.PostFetch}/${LocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

