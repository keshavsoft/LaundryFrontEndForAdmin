const StartFunc = (data) => {
    jFLocalToInputQrCodeId(data)
};

let jFLocalToInputQrCodeId = (inValue) => {
    let jVarLocalHtmlId = 'QrCodeId';
    let jVarLocalQrCodeId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalQrCodeId === null === false) {
        jVarLocalQrCodeId.innerHTML = inValue;
    };
};

export { StartFunc };