import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import tronsauce from 'reactotron-apisauce';
import { Tron } from '@interfaces/reactotron';

declare global {
  interface Console {
    tron: Tron;
  }
}

if (__DEV__) {
  Reactotron
    // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ name: 'wbooks' })
    // controls connection & communication settings
    .useReactNative()
    // add all built-in react native plugins
    .use(tronsauce())
    .use(reactotronRedux())
    .connect();
  // let's connect!}
  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.log
  };
}

export default Reactotron;
