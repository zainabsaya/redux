
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Category from './src/category';
import ViewCard from './src/subCategory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducer/BookReducer';
import {fetchBook} from './src/action/Book.action'
const store = createStore(rootReducer,applyMiddleware(thunk));
store.dispatch(fetchBook);
const Stack = createNativeStackNavigator();
const App =() =>{
 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Category' screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="ViewCard" component={ViewCard} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{
    justifyContent:'center',
    alignItems:'center'
    
  }
});

export default App;
