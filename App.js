import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/stack";
import { navigationRef, isReadyRef } from "./src/navigation/navigation";
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './src/redux/store';
import Loader from "./src/components/Loader";
import { LogBox } from "react-native";

// const store = configureStore();

const App = () => {
  LogBox.ignoreAllLogs(true);
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