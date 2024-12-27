const StartFunc = (data) => {

    data.forEach(element => {
        jFLocalItemService({ inItemService: element.ItemService });
    });
};

const jFLocalItemService = ({ inItemService }) => {
    // var option = $('<option value="' + inItemService + '"></option>');
    const option = `<option value="${inItemService}">${inItemService}</option>`
    $('#ItemServiceSelectId').append(option);
};

export { StartFunc };