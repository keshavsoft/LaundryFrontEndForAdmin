let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "UuId" });
    
    let jVarLocalFetchUrl = `/binV4/MastersAddOns/Show/${jVarLocalFilterString}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    
    
    return value;
};

export { StartFunc };