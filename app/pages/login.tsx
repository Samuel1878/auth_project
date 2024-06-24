import { KeyboardAvoidingView, SafeAreaView, Text, View,Platform, TextInput, Pressable } from "react-native";
import {useContext, useState} from "react"
import styles from "../libs/styles";
import Form from "../components/form";
import AuthContext from "../../services/authContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase.config";
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
      try {
        const response = await signInWithEmailAndPassword(auth,email, password);
        setSuccess(true);
         signIn(response.user.uid);
      } catch (err) {
        setSuccess(false);
        setError("An error occured")
        err.code === "auth/invalid-credential" && setError("Incorrect password")
        console.log(error)
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
      
      <View style={styles.box}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.textB}>Login</Text>
        </Pressable>
        <Text style={styles.text1}>Don't have account yet? </Text>
        <Pressable style={styles.button1} onPress={()=>navigation.navigate("signup")}>
          <Text style={styles.text2}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Login;
