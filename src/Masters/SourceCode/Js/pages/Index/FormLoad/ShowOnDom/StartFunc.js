import { startFunc as MastersAddOns } from './MastersAddOns/EntryFile.js'
import { startFunc as MastersCustomers } from './MastersCustomers/EntryFile.js'
import { startFunc as MastersItems } from './MastersItems/EntryFile.js'
import { startFunc as MastersItemService } from './MastersItemService/EntryFile.js'
import { startFunc as MastersItemTypes } from './MastersItemTypes/EntryFile.js'

const StartFunc = () => {
    MastersAddOns();
    MastersCustomers();
    MastersItems();
    MastersItemService();
    MastersItemTypes();
};

export { StartFunc };
