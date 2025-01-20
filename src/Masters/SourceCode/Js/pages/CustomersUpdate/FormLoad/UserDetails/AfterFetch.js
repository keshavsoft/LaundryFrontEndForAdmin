let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;

    jFLocalToInnerHtmlyourCustomerNameTextId({ inyourCustomer: jVarLocalData.CustomerName })
    jFLocalToInnerHtmlyourMobileNumberTextId({ inyourMobile: jVarLocalData.Mobile });
    jFLocalToInnerHtmlyourDOBTextId({ inyourDOB: jVarLocalData.DOB });
    jFLocalToInnerHtmlyourGSTTextId({ inYourGST: jVarLocalData.GSTNumber });
    jFLocalToInputyourCompanyTextId({ inYourCompany: jVarLocalData.CompanyName });
    jFLocalToInputyourCity({ inYourCity: jVarLocalData.City });
    jFLocalToInputyourCOccupationTextId({ inYourOccupation: jVarLocalData.Occupation });
};

let jFLocalToInnerHtmlyourCustomerNameTextId = ({ inyourCustomer }) => {
    let jVarLocalHtmlId = 'CustomerName';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourCustomer;
};
let jFLocalToInnerHtmlyourDOBTextId = ({ inyourDOB }) => {
    let jVarLocalHtmlId = 'dob';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inyourDOB;
};
let jFLocalToInnerHtmlyourMobileNumberTextId = ({ inyourMobile }) => {
    let jVarLocalHtmlId = 'CustomerMobileNumber';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.value = inyourMobile;
};

let jFLocalToInnerHtmlyourGSTTextId = ({ inYourGST }) => {
    let jVarLocalHtmlId = 'CustomerGST';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.value = inYourGST;
};

let jFLocalToInputyourCity = ({ inYourCity }) => {
    let jVarLocalHtmlId = 'CustomerLocation';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.value = inYourCity;
};

let jFLocalToInputyourCOccupationTextId = ({ inYourOccupation }) => {
    let jVarLocalHtmlId = 'CustomerOccupation';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkDCDetailsTextId.value = inYourOccupation;

};
let jFLocalToInputyourCompanyTextId = ({ inYourCompany }) => {
    let jVarLocalHtmlId = 'CustomerCompany';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkDCDetailsTextId.value = inYourCompany;

};

export { StartFunc };