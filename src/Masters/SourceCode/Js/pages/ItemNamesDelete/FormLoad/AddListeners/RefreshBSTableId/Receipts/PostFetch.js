import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem('ItemNames');
    
    let jVarLocalFetchUrl = ` /${urlJson.Url}/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response.json();
};

export { StartFunc };

