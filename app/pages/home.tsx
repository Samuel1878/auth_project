import {Button, SafeAreaView, Text, View} from "react-native"
import styles from "../libs/styles";
const Home = () => {
    const logOut = () => {

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