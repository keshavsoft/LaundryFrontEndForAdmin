import { startFunc as MastersAddOns } from './MastersAddOns/EntryFile.js'
import { startFunc as MastersCustomers } from './MastersCustomers/EntryFile.js'

const StartFunc = () => {
    MastersAddOns();
    MastersCustomers();
};

export { StartFunc };
