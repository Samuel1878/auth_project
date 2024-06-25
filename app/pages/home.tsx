import {Button, SafeAreaView, Text, TouchableOpacity, View} from "react-native"
import styles from "../libs/styles";
import { useContext, useEffect } from "react";
import AuthContext from "../libs/constants";
import { ModalComponent } from "../components/modal";
const Home = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
    const logOut = () => {
      signOut();
    };
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>HOME</Text>
        <Text style={styles.text1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto delectus dignissimos ullam repellendus iure aperiam facilis, adipisci cumque velit atque.</Text>
        <TouchableOpacity 
          style={[styles.button,{width:"86%"}]}
          onPress={logOut}>
            <Text style={styles.textB}>
              Log Out
            </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}
export default Home;