import { StartFunc as GetFetch } from './GetFetch.js'
import { StartFunc as ServiceItem } from './ServiceItem.js'
import { StartFunc as afterFetch } from './afterFetch.js'

const startFunc = async () => {
  let localResponse = await GetFetch();
  let serviceItemsResponse = await ServiceItem();

  if (localResponse.status == 200) {
    afterFetch(await localResponse.json());
    if (serviceItemsResponse.status === 200) {
      afterFetch(await serviceItemsResponse.json());
      // console.log('Service Items:', serviceItemsData);
    }
  }
};

export { startFunc };
