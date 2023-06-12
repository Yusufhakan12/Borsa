
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Appearance, Text, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Home from "../screens/Home"
import Detail from "../screens/Detail"
import Favorite from "../screens/Favorite"
import SignInScreen from "../screens/GirisEkran/SignInScreen"
import SignUpScreen from "../screens/GirisEkran/SignUpScreen"
import SignUpScreen2 from "../screens/GirisEkran/SignUpScreen2"
import WelcomeScreen from "../screens/GirisEkran/createAccount.tsx/welcomeScreen"
import DovizScreen from "../screens/GirisEkran/createAccount.tsx/dovizScreen"
import Sube from "../screens/GirisEkran/createAccount.tsx/subeScreen"
import ProfileScreen from "../screens/profileScreen"
import OnayliyorumScreen from "../screens/GirisEkran/createAccount.tsx/onayliyorumScreen"
import { useSelector } from "react-redux"
import { RootState } from "../src/store"
import EkstraHesap from "../screens/GirisEkran/createAccount.tsx/ekstraHesap"
import { useState } from "react"
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Sign=()=>{
  const [theme,setTheme]=useState(Appearance.getColorScheme())
  Appearance.addChangeListener((scheme)=>
  setTheme(scheme.colorScheme))
  return(
    <Stack.Navigator
    screenOptions={{
      headerTitleStyle:theme==="light"?  { fontFamily: "TiltWarp-Regular", fontSize: 25 }: { fontFamily: "TiltWarp-Regular", fontSize: 25,color:"white" },
      headerStyle:{
        backgroundColor:theme==="light"?"white":"black",
      }
      

    }}
    >
      <Stack.Screen name="SigIn" component={SignInScreen}
      options={{
        headerTitle:"Sign In",
        headerTitleAlign:"center"
      }}
      />
      <Stack.Screen name="Signup" component={SignUpScreen}
       options={{
        headerTitle:"Sign up",
        headerTitleAlign:"center"
      }}
      />
      <Stack.Screen name="Signup2" component={SignUpScreen2}
       options={{
        headerTitle:"Sign up",
        headerTitleAlign:"center"
      }}
      />
        <Stack.Screen name="Welcome" component={WelcomeScreen}
       options={{
        headerShown:false,
        headerTitleAlign:"center"
      }}
      />
         <Stack.Screen name="Doviz" component={DovizScreen}
       options={{
        headerShown:false,
        headerTitleAlign:"center"
      }}
      />
        <Stack.Screen name="Sube" component={Sube}
       options={{
        headerShown:false,
        headerTitleAlign:"center"
      }}
      />

<Stack.Screen name="onayliyorum" component={OnayliyorumScreen}
       options={{
        headerShown:false,
        headerTitleAlign:"center"
      }}
      />
      
    </Stack.Navigator>
  );
}


const Homestack = () => {
  const [theme,setTheme]=useState(Appearance.getColorScheme())
  Appearance.addChangeListener((scheme)=>
  setTheme(scheme.colorScheme))
   
      return(
      <Stack.Navigator
    
        screenOptions={{
          headerTitleStyle:theme==="light"?  { fontFamily: "TiltWarp-Regular", fontSize: 25 }: { fontFamily: "TiltWarp-Regular", fontSize: 25,color:"white" },
          headerStyle:{
            backgroundColor:theme==="light"?"white":"black",
            
            
          },

        
        }}
      > 
      <Stack.Screen name="Borsa" component={Home} 
      options={{
        
        headerTitleAlign:"center"
      }}
      />
      <Stack.Screen name="Detail" component={Detail}
      options={{
      
        headerTitleAlign:"center"
      }}
      
      />
      <Stack.Screen name="EkstraHesap" component={EkstraHesap}
       options={{
       
        headerTitleAlign:"center"
      }}
      />
      </Stack.Navigator>
    );
   
    

  
}

const Tabs = () => {
  const isload=useSelector((state:RootState)=>state.us)
  const [theme,setTheme]=useState(Appearance.getColorScheme())
  Appearance.addChangeListener((scheme)=>
  setTheme(scheme.colorScheme))
  if(isload.user)
  {
    return (

      <Tab.Navigator
        screenOptions={{
         headerShown:false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard:true,
          tabBarStyle: {
            
            backgroundColor:theme==="light"?"#ffffff":"black" ,
            height: 60
          }
        }}
      >
        <Tab.Screen
  
          name="Home"
          component={Homestack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="home"
                  size={30}
                  color={focused ? "#e32f45" : "#748c94"}
                />
                <Text
                  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
                >
                  Home
                </Text>
              </View>
            )
          }}
        />
  
        <Tab.Screen
          name="favorite"
          component={Favorite}
          options={{
          
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name={focused ? "favorite" : "favorite-outline"}
                  size={30}
                  color={focused ? "#e32f45" : "#748c94"}
                />
                <Text
                  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
                >
                  Favorite
                </Text>
              </View>
            )
          }}
        />

      <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
          
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name={focused ? "person" : "person-outline"}
                  size={30}
                  color={focused ? "#e32f45" : "#748c94"}
                />
                <Text
                  style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
                >
                  Profile
                </Text>
              </View>
            )
          }}
        />


        
      </Tab.Navigator>
    )

  }
  else{
    return(
      <Tab.Navigator
      
      screenOptions={{
        
       headerShown:false,
        tabBarShowLabel: false,
        
        tabBarStyle: {
         
          height: 0
        }
      }}
    >
  <Tab.Screen
  
  name="SignIn"
  component={Sign}
  options={{
    tabBarHideOnKeyboard:true,
    tabBarShowLabel:false,
  }}
/>






      </Tab.Navigator>
    );
  }
 
}

export default Tabs
