import { StatusBar } from 'expo-status-bar';
import * as  React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from "@react-navigation/native"
import {Button,Avatar, IconButton , Colors} from "react-native-paper"
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';


const data = [
  {name:"Harshit Bhardwaj" ,
    email:"06harshitbhardwaj@gmail.com",
    phone:'8368396520',
    image:'./assets/baaghiRadix.jpeg'
},
{
  name:"Anubhav",
  email:"anubhavsharma0625@gmail.com",
  phone:'9625260816',
  image:'./assets/vickyyxxx.jpeg'
}
]



//This is home component in which only a button exist which is linked to the other screen of the app
function HomeScreen ({navigation}){
  return(
    <View style={{flex:1,}}>
      <Button
        onPress={()=> navigation.navigate("Per1") }
      style={{backgroundColor:"#6060B5", marginTop:10, margin:10}}
        mode="contained"
      >Baaghi

      </Button>
      <Button
      style={{backgroundColor:"#6060B5", marginTop:10, margin:10}}
        mode="contained"
        onPress={()=>{return navigation('Profile')}}
      >Vicky

      </Button>
      <Button
      style={{backgroundColor:'#6060B5', marginTop:10, margin:10}}
        mode="contained"      
      >Me

      </Button>
    </View>
  )
}

//This is Next component in which only a button exist which is linked to the other screen of the app
function Template ({navigation}, props){
  return(

    <View style={{justifyContent:'center', alignItems:'center',}} >
      <Avatar.Image style={{margin:20}} size={200} source={require('./assets/vickyyxxx.jpeg')}/>
      <View style={{flexDirection:'row', }}>

      <IconButton
        icon="instagram"
        color={Colors.black}
        size={50}
      />
      <IconButton
        icon="facebook"
        color={Colors.blue600}
        size={50}
      />
      <IconButton
        icon="gmail"
        color={Colors.redA400}
        size={50}
      />
      <IconButton
        icon="phone"
        color={Colors.red}
        size={50}
      />
      </View>
      <Text style={{fontWeight:'bold', fontSize:27}}>{props.name}</Text>
      <Text>King never dies ..!</Text>
      <Text>Sometimes Writer Sometimes Memer🤞</Text>
    </View>
  )
}

const Profile = (props)=>{
  return(
    <Template
      namex={data[0].name}
      email={data[0].email}
      image={data[0].image }
       />
  )
}
const Profile2 = ()=>{
  return(
    <Template
    name={data[1].name}
    email={data[1].email}
    image={data[1].image }
     />
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
      <Drawer.Screen name="Vicky" component={Profile}/>
      <Drawer.Screen name="Baaghi" component={Profile2}/>
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
