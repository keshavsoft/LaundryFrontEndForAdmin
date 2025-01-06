const jVarCommonDataListId = "ItemServiceDataListId";

const StartFunc = (data) => {
    data.forEach(element => {
        jFLocalAddToItems({ inItemService: element.ItemService });
    });
};

const jFLocalAddToItems = ({ inItemService }) => {
    const option = `<option value="${inItemService}">${inItemService}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

export { StartFunc };