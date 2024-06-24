import { memo, useEffect, useState } from "react"
import { KeyboardAvoidingView, Platform, TextInput ,Text, View} from "react-native";
import styles from "../libs/styles";
import { REGEX_MAIL, REGEX_PWD } from "../libs/constants";

const Form = ({email, setEmail, password, setPassword }) => {
    const [validPwd, setValidPwd] = useState<boolean>(false);
    const [error, setError] = useState<String>("");
    
    useEffect(()=>{
      if(!email){
        setError("")
        return
      }
      email && REGEX_MAIL.test(email)
        ?setError("")
        :setError("Invalid syntax!")
    },[email]);
    useEffect(()=>{
      if(!password) {
        setValidPwd(true)
        return
      }
      setValidPwd(REGEX_PWD.test(password))
    },[password])
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.box}
      >
        <View style={styles.inputBox}>
            <TextInput
                value={email}
                placeholder="example@mail.com"
                inputMode="email"
                textContentType="emailAddress"
                onChangeText={(e) => setEmail(e)}
                style={styles.inputs}
                placeholderTextColor={"#515B5E"}
                />
            <Text style={styles.warn_1}>{error}</Text>
        </View>
        <TextInput
          value={password}
          placeholder="password"
          textContentType="password"
          onChangeText={(e) => setPassword(e)}
          style={styles.inputs}
          placeholderTextColor={"#515B5E"}
        />
         { !validPwd?<Text style={styles.warn_2}>Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long!</Text>:null}
      </KeyboardAvoidingView>
        
    )
}
export default memo(Form)