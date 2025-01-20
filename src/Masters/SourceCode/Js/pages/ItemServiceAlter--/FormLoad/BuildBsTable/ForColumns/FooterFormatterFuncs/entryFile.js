let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    
    return [
        `<a class="like btn " href="#" title="Alter">`,
         `<i class="bi bi-pencil-square"></i>`

    ].join('')

    
};

export { StartFunc };