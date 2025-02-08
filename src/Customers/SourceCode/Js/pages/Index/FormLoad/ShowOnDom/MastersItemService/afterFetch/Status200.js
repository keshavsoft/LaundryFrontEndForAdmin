const StartFunc = (data) => {
    let localItemServicedata = data.Count
    jFLocalToInputItemServicesId(localItemServicedata)
    jFLocalToInputItemServicesCount(localItemServicedata)

};

let jFLocalToInputItemServicesId = (inValue) => {
    let jVarLocalHtmlId = 'ItemServicesID';
    let jVarLocalItemServicesId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemServicesId === null === false) {
        jVarLocalItemServicesId.innerHTML = inValue;
    };
};

let jFLocalToInputItemServicesCount = (inValue) => {
    let jVarLocalHtmlId = 'ItemServicesCount';
    let jVarLocalItemServicesCount = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemServicesCount === null === false) {
        jVarLocalItemServicesCount.innerHTML = inValue;
    };
};

export { StartFunc };