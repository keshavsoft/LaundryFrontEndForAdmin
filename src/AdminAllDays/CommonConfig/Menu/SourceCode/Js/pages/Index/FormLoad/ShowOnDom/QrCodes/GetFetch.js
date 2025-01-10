import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let LocalQrCodestableName = UrlJson.QrCodestableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocalQrCodestableName}/AggrFuncs/Count`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

