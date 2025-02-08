let StartFunc = ({ inFetchData }) => {
    const url = new URL(window.location.href);
    let NewURl = new URL("./CustomersEdit.html", url);
    const new_url = new URL(`${NewURl.href}`);
    window.location.href = new_url.href;

};


export { StartFunc };