import { StartFunc as headerMenu } from "./headerMenu.js";

const StartFunc = () => {
    headerMenu();
    jFLocalAddToItems({ inItemName: "Shirt" })
};

const jFLocalAddToItems = ({ inItemName }) => {
    var option = $('<option value="' + inItemName + '"></option>');

    $('#ItemNameDataListId').append(option);
};

export { StartFunc };
