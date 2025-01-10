const StartFunc = (data) => {
    jFLocalToInputAddonsId(data)
};

let jFLocalToInputAddonsId = (inValue) => {
    let jVarLocalHtmlId = 'CustomersId';
    let jVarLocalAddonsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddonsId === null === false) {
        jVarLocalAddonsId.innerHTML = inValue;
    };
};

export { StartFunc };