import 'react-native-gesture-handler';
import { View } from 'react-native';
import store from './store/store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
    </Provider>
  );
}

