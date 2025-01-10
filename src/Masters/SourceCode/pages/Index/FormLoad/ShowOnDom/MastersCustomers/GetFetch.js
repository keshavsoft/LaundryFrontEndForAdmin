import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let LocalMastersCustomerstableName = UrlJson.LocalMastersCustomerstableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocalMastersCustomerstableName}/AggrFuncs/Count`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

