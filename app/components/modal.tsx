import { View,Text,Modal, ActivityIndicator} from "react-native";
import styles from "../libs/styles";
import {BlurView} from "expo-blur";

export const ModalComponent = ({loading = false, setLoading}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={loading}
            onRequestClose={() => {
            setVisible(!loading);
            }}>
            <BlurView 
             intensity={50} 
             tint="dark" 
             style={styles.modalContainer}>
                <View style={styles.modal}>
                    <ActivityIndicator size="large" color="#85fcad" />
                </View>
            </BlurView>
        </Modal>
    )
}
