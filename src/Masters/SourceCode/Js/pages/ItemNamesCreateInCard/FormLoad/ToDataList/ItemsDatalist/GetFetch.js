let StartFunc = async () => {

    let jVarLocalFetchUrl = `/Custom/Cleaning/V1/Masters/MastersItemTypes/Get/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

