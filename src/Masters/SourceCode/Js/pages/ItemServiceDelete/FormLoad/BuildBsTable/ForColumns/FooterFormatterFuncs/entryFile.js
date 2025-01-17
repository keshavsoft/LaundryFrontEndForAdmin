let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    
    return [
        `<a class="like btn " href="#" title="Alter">`,
         `<button type="button" class="btn btn-danger btn-sm">
        <i class="bi bi-trash3-fill"></i> 
        </button>
`

    ].join('')

    
};

export { StartFunc };