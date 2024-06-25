import { KeyboardAvoidingView, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import {useContext, useEffect, useState} from "react"
import styles from "../libs/styles";
import Form from "../components/form";
import { REGEX_MAIL, REGEX_PWD } from "../libs/constants";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase.config"
import AuthContext from "../libs/constants";
import { ModalComponent } from "../components/modal";

const Signup = ({navigation}) => {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<String>("");
    const {signIn} = useContext(AuthContext);

    const goToLogin = () => navigation.navigate("login");
    const handleSubmit = async() => {
      setLoading(true);
      setError("");
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        signIn(response.user.uid)

      } catch (err:any) {
          (err.code === 'auth/email-already-in-use') && setError('email address is already in use!');
          (err.code === 'auth/invalid-email')&& setError('Email address is invalid!');
          (err.code === "auth/missing-password") && setError("Password must be provided");
          (err.code === "auth/weak-password") && setError("Provide a strong password")
             console.log(err.code)
      }
   
      setLoading(false)
    };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Register</Text>

      <Form 
        email={email} 
        setEmail={setEmail} 
        password={password}
        setPassword={setPassword}/>

      <View style={styles.buttonContainer}>
       <Text style={styles.error}>{error}</Text>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textB}>Sign Up</Text>
        </Pressable>
        <Text style={styles.text1}>Already have an account? </Text>
        <Pressable style={styles.button_sec} 
          onPress={goToLogin}>
          <Text style={styles.text2}>Login</Text>
        </Pressable>
      </View>
      <ModalComponent loading={loading} setLoading={setLoading}/>

     
    </SafeAreaView>
  );
};
export default Signup;
