const StartFunc = (data) => {
    let localItemServicedata = data.JsonData
    jFLocalToInputItemServicesId(localItemServicedata)
};

let jFLocalToInputItemServicesId = (inValue) => {
    let jVarLocalHtmlId = 'ItemServicesID';
    let jVarLocalItemServicesId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemServicesId === null === false) {
        jVarLocalItemServicesId.innerHTML = inValue;
    };
};

export { StartFunc };