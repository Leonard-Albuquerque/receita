import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home} from '.../pages/home'
import { favorites } from '../pages/favorites'
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export function Routes(){
    return(
<Tab.Navigator
screenOptions={{
    headerShown: false,
    tabBarHideOnKeyBoard: true,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#121212",

    tabBarStyle:{
        backgroundColor: "#FFF",
        borderTopWidth: 0
    }
}}
>


<Tab.Screen
 name="HomeTab"
  component={Home}
  options={{
    tabBarIcon: ({color, size, focused }) =>{
if(focused) {
    <Ionicons name="home" color="#000" size={size} />
}

return <Ionicons name="home-outline" color={color} size={size} />
    }
  }}
   />
<Tab.Screen
 name="Favorites"
  component={favorites}
  options={{
    tabBarIcon: ({color, size, focused}) =>{
        if(focused){
            return <Ionicons name="heart" color="#FF4141" size={size}/>
        }

        return <Ionicons name="heart-outline" color={color} size={size}/> 
    }
  }}
  />

</Tab.Navigator>

    )
}