import {Button, SafeAreaView, Text, View} from "react-native"
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