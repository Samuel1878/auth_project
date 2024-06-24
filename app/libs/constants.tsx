import {createContext} from "react";
const AuthContext = createContext();

export default AuthContext;
export const REGEX_PWD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
export const REGEX_MAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
