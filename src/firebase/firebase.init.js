
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_AUTH_apiKey,
  authDomain: import.meta.env.VITE_AUTH_authDomain,
  projectId: import.meta.env.VITE_AUTH_projectId,
  storageBucket: import.meta.env.VITE_AUTH_storageBucket,
  messagingSenderId: import.meta.env.VITE_AUTH_messagingSenderId,
  appId: import.meta.env.VITE_AUTH_appId
};

export const app = initializeApp(firebaseConfig);