const StartFunc = (data) => {
    let localItemTypedata = data.Count
    jFLocalToInputItemTypeId(localItemTypedata)
    jFLocalToInputItemTypeCount(localItemTypedata)
};

let jFLocalToInputItemTypeId = (inValue) => {
    let jVarLocalHtmlId = 'ItemTypeID';
    let jVarLocalItemTypeId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemTypeId === null === false) {
        jVarLocalItemTypeId.innerHTML = inValue;
    };
};

let jFLocalToInputItemTypeCount = (inValue) => {
    let jVarLocalHtmlId = 'ItemTypeCount';
    let jVarLocalItemTypeCount = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemTypeCount === null === false) {
        jVarLocalItemTypeCount.innerHTML = inValue;
    };
};

export { StartFunc };