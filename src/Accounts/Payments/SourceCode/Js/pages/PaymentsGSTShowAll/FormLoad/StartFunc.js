import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
    jFLocalToDateInputId();
    jFLocalFromDateInputId();
  
};;
let jFLocalToDateInputId = () => {
let jVarLocalFromDateInputId = 'ToDateInputId';
let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
let year = today.getFullYear();
let formattedToday = `${day}-${month}-${year}`;

console.log(formattedToday);
jVarLocalHtmlId.value =formattedToday;

}

let jFLocalFromDateInputId = () => {
let jVarLocalFromDateInputId = 'FromDateInputId';
let jVarLocalHtmlId = document.getElementById(jVarLocalFromDateInputId);
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
let day = String(yesterday.getDate()).padStart(2, '0');
let month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-based
let year = yesterday.getFullYear();
let formattedYesterday = `${day}-${month}-${year}`;
console.log(formattedYesterday);
jVarLocalHtmlId.value =formattedYesterday;


}

export { StartFunc };
