import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/stack";
import { navigationRef, isReadyRef } from "./src/navigation/navigation";
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from './src/redux/store';

const store = configureStore();

const App = () => {
  console.disableYellowBox = true;
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;