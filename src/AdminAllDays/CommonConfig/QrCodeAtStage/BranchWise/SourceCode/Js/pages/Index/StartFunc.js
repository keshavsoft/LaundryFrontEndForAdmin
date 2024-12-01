const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        jFLocalLeftSide();
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const tbody = document.querySelector("#MainRowId");
    const template = document.querySelector("#CardForTotalQrCodesId");

    // Clone the new row and insert it into the table
    const clone = template.content.cloneNode(true);
    let td = clone.querySelector("h6");
    td.innerHTML = "1235646565";

    tbody.appendChild(clone);
} else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
};

StartFunc();