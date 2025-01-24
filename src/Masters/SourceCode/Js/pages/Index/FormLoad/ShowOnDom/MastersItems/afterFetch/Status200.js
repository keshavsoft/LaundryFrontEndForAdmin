const StartFunc = (data) => {
    let localItemdata = data.Count
    jFLocalToInputItemsId(localItemdata)
    jFLocalToInputItemsCount(localItemdata)

};

let jFLocalToInputItemsId = (inValue) => {
    let jVarLocalHtmlId = 'ItemsId';
    let jVarLocalItemsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemsId === null === false) {
        jVarLocalItemsId.innerHTML = inValue;
    };
};

let jFLocalToInputItemsCount = (inValue) => {
    let jVarLocalHtmlId = 'ItemsCount';
    let jVarLocalItemsCount = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemsCount === null === false) {
        jVarLocalItemsCount.innerHTML = inValue;
    };
};

export { StartFunc };