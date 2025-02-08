const StartFunc = (data) => {
    let localCustomerdata = data.Count
    jFLocalToInputCustomersID(localCustomerdata)
    jFLocalToInputCustomersCount(localCustomerdata)
};

let jFLocalToInputCustomersID = (inValue) => {
    let jVarLocalHtmlId = 'CustomersID';
    let jVarLocalCustomersID = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomersID === null === false) {
        jVarLocalCustomersID.innerHTML = inValue;
    };
};

let jFLocalToInputCustomersCount = (inValue) => {
    let jVarLocalHtmlId = 'CustomersCount';
    let jVarLocalCustomersCount = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomersCount === null === false) {
        jVarLocalCustomersCount.innerHTML = inValue;
    };
};

export { StartFunc };