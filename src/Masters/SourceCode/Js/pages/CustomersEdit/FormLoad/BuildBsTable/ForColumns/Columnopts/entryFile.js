let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFLocalOptsFormater;
    // inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

function jFLocalOptsFormater(value, row, index) {
    return [
        `<a href="#" class="link-danger">`,
        `<i class="bi bi-pencil ms-3"></i>`,
        `</a>`
    ].join('');
};



export { StartFunc };