import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as StartFuncAfterFetch } from './afterFetch/EntryFile.js';

const StartFunc = async () => {
    let localResponse = await StartFuncFetchFuncs();

    StartFuncAfterFetch({ inResponse: localResponse });
};

export { StartFunc };
