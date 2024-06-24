import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { useContext } from 'react';
import AuthContext from '../services/authContext';

const Stack = createNativeStackNavigator();
const LayOut = () => {
  const {userId} = useContext(AuthContext);
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
         {
          userId ? 
           <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />:
          (<>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          </>
          )
         }
        </Stack.Navigator>
      </NavigationContainer>
    );
};
export default LayOut;