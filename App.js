import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  render(){
    return(

      <View style={styles.container}>
    <Text>React Home Screen !</Text>
    <Button
      title="Go to About page"
      onPress={()=>this.props.navigation.navigate('About')}
    />
    <StatusBar style="auto" />
  </View>
      )
  }
}

class AboutScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>About Screen Here We go !!!</Text>
        <StatusBar style="auto"/>
      </View>
    )
  }
}
const AppNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  About:{
    screen:AboutScreen
  }
})
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
