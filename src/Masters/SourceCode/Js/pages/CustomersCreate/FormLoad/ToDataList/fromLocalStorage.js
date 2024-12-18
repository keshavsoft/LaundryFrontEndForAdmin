const StartFunc = () => {
    const jVarLocalCustomerData = localStorage.getItem("CustomerNames");
    const jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

    jVarLocalCustomerDataAsJson.forEach(element => {
        console.log("element",element);
        jFLocalAddToItems({ inCustomerName: element.CustomerName });
    });
};

const jFLocalAddToItems = ({ inCustomerName }) => {
    var option = $('<option value="' + inCustomerName + '"></option>');

    $('#CustomerNameDataListId').append(option);
};

export { StartFunc };
