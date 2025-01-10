const StartFunc = (data) => {
    jFLocalToInputItemServicesId(data)
};

let jFLocalToInputItemServicesId = (inValue) => {
    let jVarLocalHtmlId = 'ItemServicesID';
    let jVarLocalItemServicesId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemServicesId === null === false) {
        jVarLocalItemServicesId.innerHTML = inValue;
    };
};

export { StartFunc };