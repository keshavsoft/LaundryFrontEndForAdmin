import { StartFunc as headerMenu } from "./headerMenu.js";
import { StartFunc as fromLocalStorage } from "./fromLocalStorage.js";

const StartFunc = () => {
    headerMenu();
    fromLocalStorage();
    // jFLocalAddToItems({ inItemName: "Shirt" });
    // jFLocalAddToItems({ inItemName: "Pant" });
};

const jFLocalAddToItems = ({ inItemName }) => {
    var option = $('<option value="' + inItemName + '"></option>');

    $('#ItemNameDataListId').append(option);
};

export { StartFunc };
