import { KeyboardAvoidingView, SafeAreaView, Text, View,Platform, TextInput, Pressable } from "react-native";
import {useContext, useState} from "react"
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
        const [success, setSuccess] = useState<Boolean>(false);
        const [error, setError] = useState<String>("");
        const {signIn} = useContext(AuthContext);
    const handleLogin = async() => {
      setLoading(true);
      setSuccess(false);
      setError("");
      try {
        const response = await signInWithEmailAndPassword(auth,email, password);
        setSuccess(true);

        signIn(response.user.uid);
      } catch (err) {
        setSuccess(false);
        (err.code === "auth/invalid-email" || "auth/invalid-credential" || "auth/missin-email") && setError("Incorrect password or email");
        err.code === "auth/missing-password" && setError("Password must be provided")
        console.log(err.code)
      }
      setLoading(false)
    };
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
        <Pressable style={styles.button} onPress={handleLogin}>
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
