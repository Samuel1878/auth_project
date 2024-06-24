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
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginVertical:10,
    position:"relative",

    
  },
  inputBox:{
    width: "100%",
    position:"relative",
    marginVertical:10,
  },
  inputs: {
    width: "100%",
    padding: 15,
    borderBottomColor: "#85fcad",
    borderBottomWidth: 2,
    marginVertical: 10,
    fontSize:18,
    color:"#f4f4f4"
  },
  button: {
    padding: 15,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#85fcad",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button1: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#515B5E",
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginVertical: 10,
  },
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
  textB: {
    fontSize: 18,
    color: "#101010",
    fontWeight: "500",
  },
  text: {
    fontSize: 19,
    color: "#85fcad",
    fontWeight: "500",
  },
  warn: {
    fontSize: 11,
    color: "#fefefe",
    fontWeight: "200",
    textAlign:"center",
    bottom:"-15%",
    position:"absolute"
  },
  error: {
    fontSize: 14,
    color: "red",
    fontWeight: "200",
  },
  passwordWarn: {
    fontSize: 8,
    color: "#f9f9f9",
    fontWeight: "200",
    textAlign:"center",
    position:"absolute",
    bottom:"-20%",
  }
});
export default styles;