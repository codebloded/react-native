import { StatusBar } from 'expo-status-bar';
import * as  React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from "@react-navigation/native"

//This is home component in which only a button exist which is linked to the other screen of the app
function HomeScreen ({navigation}){
  return(
    <View style={{flex:1, alignItems:'center' ,justifyContent:'center'}}>
      <Button
        title="Home"
        onPress={()=>navigation('Next')}
      />
    </View>
  )
}

//This is Next component in which only a button exist which is linked to the other screen of the app
function Next ({navigation}){
  return(
    <View style={{flex:1, alignItems:'center' ,justifyContent:'center'}} >
      <Button
       onPress={()=>navigation('Home')}
       title="Next"  
      />
    </View>
  )
}

//This is how we initialize the Navigator(DRAWER) either drawer or stack or tab 
const Drawer = createDrawerNavigator();

//parent component App() in which the navigation bar exists
export default function App(){
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">

      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Next" component={Next}/>
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

//Customize CSS :)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
