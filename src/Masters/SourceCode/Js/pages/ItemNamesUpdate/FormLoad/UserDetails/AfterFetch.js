let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;
    console.log(jVarLocalData);
    
    jFLocalToInnerHtmlyourUsernameTextId({ inyourCategory: jVarLocalData.Category })
    jFLocalToInnerHtmlyourPasswordTextId({ inyourItemType: jVarLocalData.ItemType });
    jFLocalToInnerHtmlUserMobileTextId({ inYourServices: jVarLocalData.Service });
    jFLocalToInnerHtmlyourBranchTextId({ inyourPcs: jVarLocalData.Pcs });
    jFLocalToInputyourMobileTextId({ inYourRate: jVarLocalData.DryWashRate });
    jFLocalToInputyourName({ inYourName: jVarLocalData.ItemName });
    // jFLocalToInputVoucherNumberDCDetailsTextId({ inVoucherNumberDCDetailsTextId: jVarLocalData.pk });
    // jFLocalToInputDateTextDCDetailsId({ inDateTextDCDetailsId: jVarLocalData.Date });
    // jFLocalToInputDescriptionTextDCDetailsId({ inDescriptionTextDCDetailsId: jVarLocalData.Description });
    // jFLocalToInputDCFactoryDCDetailsTextId({ inDCFactoryDCDetailsTextId: jVarLocalData.Factory });
    // jFLocalToInputDCBranchNameDCDetailsTextId({ inDCBranchNameDCDetailsTextId: jVarLocalData.BranchName });
    // jFLocalDCBranchNameId({ inValue: jVarLocalData.BranchName })
    // jFLocalToInputRowCountId(inDataToShow.QrCount)
};

let jFLocalToInnerHtmlyourUsernameTextId = ({ inyourCategory }) => {
    let jVarLocalHtmlId = 'CategoryId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourCategory;
};

let jFLocalToInnerHtmlyourPasswordTextId = ({ inyourItemType }) => {
    let jVarLocalHtmlId = 'ItemTypeSelectId';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.value = inyourItemType;
};

let jFLocalToInnerHtmlUserMobileTextId = ({ inYourServices }) => {
    let jVarLocalHtmlId = 'ItemServiceSelectId';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.value = inYourServices;
};

let jFLocalToInnerHtmlyourBranchTextId = ({ inyourPcs }) => {
    let jVarLocalHtmlId = 'Pcs';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.value = inyourPcs;
};

let jFLocalToInputyourMobileTextId = ({ inYourRate }) => {
    let jVarLocalHtmlId = 'DryWashRate';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkDCDetailsTextId.value = inYourRate;
    
};
let jFLocalToInputyourName = ({ inYourName }) => {
    let jVarLocalHtmlId = 'ItemNameInputId';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkDCDetailsTextId.value = inYourName;
    
};
// let jFLocalToInputVoucherNumberDCDetailsTextId = ({ inVoucherNumberDCDetailsTextId }) => {
//     let jVarLocalHtmlId = 'VoucherNumberDCDetailsTextId';
//     let jVarLocalVoucherNumberDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalVoucherNumberDCDetailsTextId === null === false) {
//         jVarLocalVoucherNumberDCDetailsTextId.innerHTML = inVoucherNumberDCDetailsTextId;
//     };
// };

// let jFLocalToInputDateTextDCDetailsId = ({ inDateTextDCDetailsId }) => {
//     let jVarLocalHtmlId = 'DateTextDCDetailsId';
//     let jVarLocalDateTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDateTextDCDetailsId === null === false) {
//         jVarLocalDateTextDCDetailsId.innerHTML = inDateTextDCDetailsId;
//     };
// };

// let jFLocalToInputDescriptionTextDCDetailsId = ({ inDescriptionTextDCDetailsId }) => {
//     let jVarLocalHtmlId = 'DescriptionTextDCDetailsId';
//     let jVarLocalDescriptionTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDescriptionTextDCDetailsId === null === false) {
//         jVarLocalDescriptionTextDCDetailsId.innerHTML = inDescriptionTextDCDetailsId;
//     };
// };

// let jFLocalToInputDCFactoryDCDetailsTextId = ({ inDCFactoryDCDetailsTextId }) => {
//     let jVarLocalHtmlId = 'DCFactoryDCDetailsTextId';
//     let jVarLocalDCFactoryDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDCFactoryDCDetailsTextId === null === false) {
//         jVarLocalDCFactoryDCDetailsTextId.innerHTML = inDCFactoryDCDetailsTextId;
//     };
// };

// let jFLocalToInputDCBranchNameDCDetailsTextId = ({ inDCBranchNameDCDetailsTextId }) => {
//     let jVarLocalHtmlId = 'DCBranchNameDCDetailsTextId';
//     let jVarLocalDCBranchNameDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDCBranchNameDCDetailsTextId === null === false) {
//         jVarLocalDCBranchNameDCDetailsTextId.innerHTML = inDCBranchNameDCDetailsTextId;
//     };
// };

// let jFLocalDCBranchNameId = ({ inValue }) => {
//     let jVarLocalHtmlId = 'DCBranchNameId';
//     let jVarLocalDCBranchNameDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalDCBranchNameDCDetailsTextId === null === false) {
//         jVarLocalDCBranchNameDCDetailsTextId.innerHTML = inValue;
//     };
// };

// let jFLocalToInputRowCountId = (inValue) => {
//     let jVarLocalHtmlId = 'RowCountId';
//     let jVarLocalRowCountId = document.getElementById(jVarLocalHtmlId);

//     if (jVarLocalRowCountId === null === false) {
//         jVarLocalRowCountId.innerHTML = inValue;
//     };
// };

export { StartFunc };