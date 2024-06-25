import { memo, useEffect, useState } from "react"
import { KeyboardAvoidingView, Platform, TextInput ,Text, View, TouchableOpacity} from "react-native";
import styles from "../libs/styles";
import { REGEX_MAIL, REGEX_PWD } from "../libs/constants";
import { AntDesign,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

const Form = ({email, setEmail, password, setPassword }) => {
    const [validPwd, setValidPwd] = useState<boolean>(false);
    const [error, setError] = useState<String>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePassword = () => setShowPassword(!showPassword);
    
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
            <Text style={[styles.label,{bottom:"-12%"}]}>{error}</Text>
            <View style={styles.icons}>
                <MaterialCommunityIcons name="email-variant" size={24} color="#85fcad" />
            </View>
        </View>
        <View style={styles.inputBox}>

            <TextInput
                value={password}
                placeholder="password"
                textContentType="password"
                onChangeText={(e) => setPassword(e)}
                style={styles.inputs}
                placeholderTextColor={"#515B5E"}
                secureTextEntry={!showPassword}
                />
            { !validPwd 
            ?
               
                <Text style={styles.label}><AntDesign name="warning" size={12} color="red"/>  Password must contain one digit, one lowercase and uppercase letter, one special character, no space, and 8-16 characters!
                </Text>
            :null}
            <TouchableOpacity onPress={togglePassword} style={styles.icons}>
                <Ionicons name={showPassword?"eye-sharp":"eye-off-sharp"} size={24} color="#85fcad" />

            </TouchableOpacity>
          

        </View>
       
      </KeyboardAvoidingView>
        
    )
}
export default memo(Form)