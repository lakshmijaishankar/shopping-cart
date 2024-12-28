import Reactotron, {networking, asyncStorage} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotonConfiq = () => {
  const reactotron = Reactotron.configure({
    name: 'First React Native App',
    environment: process.env.NODE_ENV,
  })
    .use(reactotronRedux())
    .use(asyncStorage())
    .use(networking())
    .useReactNative({
      networking: true,
      devTools: true,
      log: true,
      asyncStorage: true,
    }) // add all built-in react native plugins
    .connect(); // let's connect!
  // .onCustomCommand('show_async_storage', () => {});

  return reactotron;
};

export default reactotonConfiq;
