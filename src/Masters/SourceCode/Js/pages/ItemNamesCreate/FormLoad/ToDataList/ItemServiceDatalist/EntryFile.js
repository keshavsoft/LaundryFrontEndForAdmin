import { StartFunc as ServiceItem } from './ServiceItem.js'
import { StartFunc as afterFetch } from './afterFetch.js'

const startFunc = async () => {
  let serviceItemsResponse = await ServiceItem();

  if (serviceItemsResponse.status === 200) {
    afterFetch(await serviceItemsResponse.json());
    // console.log('Service Items:', serviceItemsData);
  }
};


export { startFunc };
