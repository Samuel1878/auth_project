import AuthContext from "./authContext";
import * as SecureStore from "expo-secure-store";
import {useEffect, useMemo, useReducer} from "react"
const initialValue = {
    loading:true,
    isSignOut: false,
    userID: null,
};
const Auth = ({children}) => {
    const [state, dispatch] = useReducer((prev, action)=>{
        switch (action.type){
            case "RESTORE_TOKEN":
                return {
                    ...prev,
                    userID: action.token,
                    loading: false,
                };
            case "SIGN_IN":
                return {
                    ...prev,
                    isSignOut: false,
                    userID: action.token,
                };
            case "SIGN_OUT":
                return {
                    ...prev,
                    isSignOut: true,
                    userID: null,
                };
        }
    },initialValue);
    useEffect(()=>{
        const restoreToken = async() => {
            let userID;
            try {
                userID = await SecureStore.getItemAsync("userId");
            } catch (err) {
                console.error("Restoring token failed" + err.message)
            }
            dispatch({type:"RESTORE_TOKEN", token:userID});
        };
        restoreToken();

    },[]);
    const authContext = useMemo(()=> ({
        signIn:async (userID:string) => {
            dispatch({type:"SIGN_IN", token:userID});
            await SecureStore.setItemAsync("userId", userID);
        },
        signOut: ()=> {
            dispatch({type:"SIGN_OUT"});
            SecureStore.deleteItemAsync("userId");
        },
        userId: state.userID
    }));
    return(
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth;