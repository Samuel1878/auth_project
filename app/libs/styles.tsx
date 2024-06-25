import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    alignItems: "center",
    paddingVertical: 25,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#85FCAD",
  },
  box: {
    flex:2.5,
    display: "flex",
    justifyContent: "center",

    width: "80%",
    marginVertical:10,
    position:"relative", 


  },
  inputBox:{
    width: "100%",
    position:"relative",
    marginVertical:6,
  },
  inputs: {
    width: "100%",
    padding: 15,
    borderBottomColor: "#85fcad",
    borderBottomWidth: 2,
    marginVertical: 10,
    fontSize:18,
    color:"#f9f9f9",
  },
  label: {
    fontSize: 10,
    color: "#fefefe",
    fontWeight: "200",
    textAlign:"center",
    bottom:"-28%",
    position:"absolute",
  },
  icons:{
    position:'absolute',
    right:30,
    top:"30%"
  },
  buttonContainer: {
    flex:1,
    width:"84%",
    justifyContent:"flex-end",

  },
  button: {
    padding: 15,
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#85fcad",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button_sec: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#515B5E",
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginVertical: 10,
  },

  ///COMMON TEXT 
  text1: {

    fontSize: 14,
    color: "#fff",
    fontWeight: "300",
    textAlign: "center",
  },
  text2: {

    fontSize: 18,
    color: "#fefefe",
    fontWeight: "400",
  },
  text3: {
    fontSize: 21,
    color: "#f1f1f1",
    fontWeight: "500",
  },
  ///COLORED TEXT
  textB: {
    fontSize: 18,
    color: "#101010",
    fontWeight: "500",
  },
  text: {
    fontSize: 19,
    color: "#85fcad",
    fontWeight: "400",
  },

 
  error: {
    fontSize: 15,
    color: "red",
    fontWeight: "200",
    textAlign:"center",
    marginVertical:5
  },

  ///MODAL
  modalContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  modal:{
    backgroundColor:"#515B5E",
    borderRadius: 10,
    padding: 10,

  }

  
});
export default styles;