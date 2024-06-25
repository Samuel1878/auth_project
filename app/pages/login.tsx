import { KeyboardAvoidingView, SafeAreaView, Text, View,Platform, TextInput, Pressable } from "react-native";
import {useContext, useEffect, useState} from "react"
import styles from "../libs/styles";
import Form from "../components/form";
import AuthContext from "../libs/constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.config"
import { ModalComponent } from "../components/modal";

const Login = ({navigation}) => {
        const [email, setEmail] = useState<String>("");
        const [password, setPassword] = useState<String>("");
        const [loading, setLoading] = useState<Boolean>(false);
        const [error, setError] = useState<String>("");
        const {signIn} = useContext(AuthContext);

    const handleLogin = async() => {
      setLoading(true);
      setError("");
      try {
        const response = await signInWithEmailAndPassword(auth,email, password);
        signIn(response.user.uid);
      } catch (err) {
        (err.code === "auth/invalid-email" || "auth/invalid-credential" || "auth/missin-email") && setError("Incorrect password or email");
        err.code === "auth/missing-password" && setError("Password must be provided")
        // console.log(err.code)
        setEmail("");
        setPassword("");
      }
      setLoading(false)
    };
    useEffect(()=>{
      error && setTimeout(()=>{
        setError("")
      },5000)
    },[error])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Form
        email={email} 
        setEmail={setEmail} 
        password={password}
        setPassword={setPassword}/>
      
      <View style={styles.buttonContainer}>
        <Text style={styles.error}>{error}</Text>
        <Pressable 
          style={[styles.button,{opacity:!email && !password?.85:1}]} 
          onPress={handleLogin} 
          disabled={!email && !password}
          >
          <Text style={styles.textB}>Login</Text>
        </Pressable>
        <Text style={styles.text1}>Don't have account yet? </Text>
        <Pressable 
          style={styles.button_sec} 
          onPress={()=>navigation.navigate("signup")}>
          <Text style={styles.text2}>Sign Up</Text>
        </Pressable>
      </View>
      <ModalComponent loading={loading} setLoading={setLoading}/>
    </SafeAreaView>
  );
};
export default Login;
