import { startFunc as ItemsDatalist } from './ItemsDatalist/EntryFile.js'
import { startFunc as ItemServiceDatalist } from './ItemServiceDatalist/EntryFile.js'

const StartFunc = () => {
    ItemsDatalist();
    ItemServiceDatalist();
};

export { StartFunc };
