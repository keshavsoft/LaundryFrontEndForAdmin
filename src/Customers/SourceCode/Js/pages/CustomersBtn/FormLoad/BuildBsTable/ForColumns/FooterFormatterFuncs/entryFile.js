let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    
    return [
        `<a class="like btn " href="#" title="Orders">`,
         `<i class="bi bi-stack"></i>`

    ].join('')

    
};

export { StartFunc };