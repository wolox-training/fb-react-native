import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import tronsauce from 'reactotron-apisauce';
import { Tron } from 'src/interfaces/reactotron';

Reactotron
  // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ name: 'wbooks' })
  // controls connection & communication settings
  .useReactNative()
  // add all built-in react native plugins
  .use(tronsauce())
  .use(reactotronRedux())
  .connect();
// let's connect!

declare global {
  interface Console {
    tron: Tron;
  }
}
// eslint-disable-next-line no-console
console.tron = {
  log: Reactotron.log
};

export default Reactotron;
