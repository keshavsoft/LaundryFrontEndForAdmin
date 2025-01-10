import { StartFunc as headerMenu } from "./headerMenu.js";

const StartFunc = () => {
    const jVarLocalItemsData = localStorage.getItem("ItemNames");
    const jVarLocalItemsDataAsJson = JSON.parse(jVarLocalItemsData);

    jVarLocalItemsDataAsJson.forEach(element => {
        jFLocalAddToItems({ inItemName: element.ItemName });
    });
};

const jFLocalAddToItems = ({ inItemName }) => {
    var option = $('<option value="' + inItemName + '"></option>');

    $('#ItemNameDataListId').append(option);
};

export { StartFunc };
