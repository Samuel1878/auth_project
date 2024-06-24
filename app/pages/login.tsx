import { KeyboardAvoidingView, SafeAreaView, Text, View,Platform, TextInput, Pressable } from "react-native";
import {useState} from "react"
import styles from "../libs/styles";
import Form from "../components/form";
const Login = ({navigation}) => {
        const [email, setEmail] = useState<String>("");
        const [password, setPassword] = useState<String>("");
        const [loading, setLoading] = useState<Boolean>(false);
        const [success, setSuccess] = useState<Boolean>(false);
        const [error, setError] = useState<String>("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Form
        email={email} 
        setEmail={setEmail} 
        password={password}
        setPassword={setPassword}/>
      
      <View style={styles.box}>
        <Pressable style={styles.button}>
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
