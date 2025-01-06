const jVarCommonDataListId="ItemNameDataListId";

const StartFunc = (data) => {
    data.forEach(element => {
        jFLocalAddToItems({ inItemName: element.ItemType });
    });
};

const jFLocalAddToItems = ({ inItemName }) => {
    const option = `<option value="${inItemName}">${inItemName}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

export { StartFunc };