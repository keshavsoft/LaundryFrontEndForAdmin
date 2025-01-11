const StartFunc = (data) => {
    let localQrCodedata = data.JsonData
    jFLocalToInputQrCodeId(localQrCodedata)
};

let jFLocalToInputQrCodeId = (inValue) => {
    let jVarLocalHtmlId = 'QrCodeId';
    let jVarLocalQrCodeId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalQrCodeId === null === false) {
        jVarLocalQrCodeId.innerHTML = inValue;
    };
};

export { StartFunc };