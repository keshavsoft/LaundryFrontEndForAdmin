const StartFunc = () => {
    let jVarLocalCategoryValue = jFLocalCategoryId();
    let jVarLocalItemTypeSelect = jFLocalItemTypeSelectId();
    let jFLocalItemServiceSelectValue = jFLocalItemServiceSelectId();
    let jVarLocalItemValue = `${jVarLocalCategoryValue} ${jVarLocalItemTypeSelect} ${jFLocalItemServiceSelectValue}`;
    jFLocalToInputItemNameInputId(jVarLocalItemValue);
};

let jFLocalToInputItemNameInputId = (inValue) => {
    let jVarLocalHtmlId = 'ItemNameInputId';
    let jVarLocalItemNameInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemNameInputId === null === false) {
        jVarLocalItemNameInputId.value = inValue;
    };
};

let jFLocalCategoryId = () => {
    let jVarLocalCategoryId = 'CategoryId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCategoryId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalItemTypeSelectId = () => {
    let jVarLocalItemTypeSelectId = 'ItemTypeSelectId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalItemTypeSelectId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalItemServiceSelectId = () => {
    let jVarLocalItemServiceSelectId = 'ItemServiceSelectId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalItemServiceSelectId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }