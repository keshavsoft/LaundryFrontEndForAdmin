import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = jFLocalBranch();
    let FromDate = jFLocalFromDateInputId();
   let toDate = jFLocalToDateInputId();

    let jVarLocalFetchUrl = ` /${urlJson.Url}/${jVarLocalBranchName}/${FromDate}/${toDate}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

let jFLocalBranch = () => {
    let jVarLocalBranch = 'Branch'
    let jVarLocalHtmlId = document.getElementById(jVarLocalBranch);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFromDateInputId = () => {
    let jVarLocalFromDateInputId = 'FromDateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFromDateInputId);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToDateInputId = () => {
    let jVarLocalToDateInputId = 'ToDateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalToDateInputId);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc };

