import { initializeApp } from "firebase/app";
import {
    getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import SecureStorage from "expo-secure-store";

const firebaseConfig = {
  apiKey: "AIzaSyCRGIWdp8sJe35Sbkcf4sUj6-0Lj_bE2N4",
  authDomain: "project-auth-e5a3f.firebaseapp.com",
  projectId: "project-auth-e5a3f",
  storageBucket: "project-auth-e5a3f.appspot.com",
  messagingSenderId: "764118230651",
  appId: "1:764118230651:web:b45bc1e264ba253e93e4de",
  measurementId: "G-48G8XCYGMT",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(SecureStorage),
});
