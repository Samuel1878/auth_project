import {Button, SafeAreaView, Text, View} from "react-native"
import styles from "../libs/styles";
import { useContext } from "react";
import AuthContext from "../../services/authContext";
const Home = () => {
  const {signOut} = useContext(AuthContext)
    const logOut = () => {
      signOut()
    }
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>HOME</Text>
        <Button
          onPress={logOut}
          title="Log Out"
          color="#85fcad"
          accessibilityLabel="Click here to logout"
        />
      </SafeAreaView>
    );
}
export default Home;