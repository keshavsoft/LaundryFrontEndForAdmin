const StartFunc = (data) => {
    jFLocalToInputItemTypeId(data)
};

let jFLocalToInputItemTypeId = (inValue) => {
    let jVarLocalHtmlId = 'ItemTypeID';
    let jVarLocalItemTypeId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemTypeId === null === false) {
        jVarLocalItemTypeId.innerHTML = inValue;
    };
};

export { StartFunc };