const StartFunc = (data) => {

    data.forEach(element => {
        jFLocalAddToItems({ inItemName: element.ItemName });
        jFLocalItemService({ inItemService: element.ItemService });

    });

};

const jFLocalAddToItems = ({ inItemName }) => {
    var option = $('<option value="' + inItemName + '"></option>');

    $('#ItemNameDataListId').append(option);
};

const jFLocalItemService = ({ inItemService }) => {
    var option = $('<option value="' + inItemService + '"></option>');

    $('#ItemServiceDataListId').append(option);
};

export { StartFunc };