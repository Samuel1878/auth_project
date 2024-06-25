import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from "expo-secure-store";
import {useEffect, useMemo, useReducer,useContext} from "react"
import { NavigationContainer } from "@react-navigation/native";
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import AuthContext from '../app/libs/constants';
import { ActivityIndicator } from 'react-native';

interface authObject {
  loading:boolean,
  isSignOut:boolean,
  userId:null | String
}
const initialValue : authObject = {
    loading:true,
    isSignOut: false,
    userId: null,
};
const Stack = createNativeStackNavigator();
const LayOut = () => {
  const [state, dispatch] = useReducer((prev, action)=>{
        switch (action.type){
            case "RESTORE_TOKEN":
                return {
                    ...prev,
                    userId: action.token,
                    loading: false,
                };
            case "SIGN_IN":
                return {
                    ...prev,
                    isSignOut: false,
                    userId: action.token,
                };
            case "SIGN_OUT":
                return {
                    ...prev,
                    isSignOut: true,
                    userId: null,
                };
        }
    },initialValue);
    const authContext = useMemo(()=> ({
      signIn:async (userId) => {
          await SecureStore.setItemAsync("userId", userId);
          dispatch({type:"SIGN_IN", token:userId});
      },
      signOut: () => {
          dispatch({type:"SIGN_OUT"});
          SecureStore.deleteItemAsync("userId");
      }
    }),[]);
    useEffect(()=>{
        const restoreToken = async() => {
            let userId;
            try {
                userId = await SecureStore.getItemAsync("userId");
            } catch (err) {
                console.log("Restoring token failed" + err.message)
            }
            dispatch({type:"RESTORE_TOKEN", token:userId});
        };
        restoreToken();
    },[]);

    if(state.loading){
      return <ActivityIndicator size="large" color="#85fcad" />
    }
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          {
            state.userId ? 
              (
                 <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
              />
              ):
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
              </>)
          }
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContext.Provider>
      
    );
};
export default LayOut;