import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
// import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncFormLoad });
    let jVarLocalFromAdmin = true;
    // let jVarLocalRate=document.getElementById("AddOnRate").value;
    // console.log(jVarLocalRate);
    if (jVarLocalFromAdmin ) {
        StartFuncFormLoad();
    };
};

StartFunc();