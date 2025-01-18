let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="link-danger">`,
        `<i class="bi bi-trash3 ms-3"></i>`,
        `</a>`
    ].join('');
};



export { StartFunc };