const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        jFLocalLeftSide();
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

const jVarLocalData = [
    {
        BranchName: "KKD"
    },
    {
        BranchName: "VSKP"
    },
    {
        BranchName: "Wanaparthy"
    },
    {
        BranchName: "Nepal"
    }
];

if ("content" in document.createElement("template")) {
    const jVarLocalMainId = document.querySelector("#MainRowId");

    jVarLocalData.forEach(element => {
        const template = document.querySelector("#TemplateForCardId");

        const clone = template.content.cloneNode(true);
        let td = clone.querySelector(".card-body h6");
        td.innerHTML = element.BranchName;

        jVarLocalMainId.appendChild(clone);
    });
} else {
};

StartFunc();