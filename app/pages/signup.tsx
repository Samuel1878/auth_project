import { KeyboardAvoidingView, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import {useEffect, useState} from "react"
import styles from "../libs/styles";
import Form from "../components/form";
import { REGEX_MAIL, REGEX_PWD } from "../libs/data";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase.config";
const Signup = ({navigation}) => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [success, setSuccess] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<String>("");

    const goToLogin = () => navigation.navigate("login");
    const handleSubmit = async() => {
      setLoading(true);
      setError("");
      setSuccess(false);
      // REGEX_MAIL.test(email) && REGEX_PWD.test(password) 
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        
      } catch (err:any) {
          setSuccess(false);
          setError("Error with sign up attempt")
          (err.code === 'auth/email-already-in-use') && setError('That email address is already in use!');
          (err.code === 'auth/invalid-email')&& setError('Email address is invalid!');
  
      }
      console.log(error)
      setLoading(false)
    }

    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <Form 
        email={email} 
        setEmail={setEmail} 
        password={password}
        setPassword={setPassword}/>
     
     
      <View style={styles.box}>
        
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textB}>Sign Up</Text>
        </Pressable>
        <Text style={styles.text1}>Already have an account? </Text>
        <Pressable style={styles.button1} 
          onPress={goToLogin}>
          <Text style={styles.text2}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Signup;
