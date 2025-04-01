import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.url;
    // const jVarLocalTableName = ConfigJson.tableName;
    let jVarLocalFetchUrl = `${jVarLocalStartUrl}`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

