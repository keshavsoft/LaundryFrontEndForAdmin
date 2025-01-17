let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    
    return [
        `<a class="like btn btn-primary" href="/Laundry/Branch/NewOrders/HtmlFiles/AddItems.html" title="Orders">`,
         `<i class="bi bi-eye"></i>`

    ].join('')

    
};

export { StartFunc };