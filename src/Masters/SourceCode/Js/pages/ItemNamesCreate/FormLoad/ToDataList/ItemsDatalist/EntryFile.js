import { StartFunc as GetFetch } from './GetFetch.js'
import { StartFunc as afterFetch } from './afterFetch.js'

const startFunc = async () => {
  let localResponse = await GetFetch();

  if (localResponse.status == 200) {
    afterFetch(await localResponse.json());
  }
};

export { startFunc };
