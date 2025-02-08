let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
};

function jFLocalOptsFormater(value, row, index) {
    return [
      `<a class="like btn btn-danger" href="#" title="Delete">`,
        '<i class="bi bi-trash3-fill"></i>',
        '</a>',
    ].join('');
};



export { StartFunc };