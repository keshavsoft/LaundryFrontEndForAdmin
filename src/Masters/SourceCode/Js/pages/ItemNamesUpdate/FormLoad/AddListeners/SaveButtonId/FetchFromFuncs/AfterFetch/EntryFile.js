let StartFunc = ({ inFetchData }) => {
    console.log("inFetchData:", inFetchData);
    const url = new URL(window.location.href);
    let NewURl = new URL("./ItemNamesAlter.html", url);
    const new_url = new URL(`${NewURl.href}`);
    window.location.href = new_url.href;

};

export { StartFunc };