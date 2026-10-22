import { initializeApp } from "firebase/app";
import { getAuth,
        createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCyuJPXnZnAiPbUETDoPZfKZD5HxE260h4",
  authDomain: "netflix-clone-c50e0.firebaseapp.com",
  projectId: "netflix-clone-c50e0",
  storageBucket: "netflix-clone-c50e0.firebasestorage.app",
  messagingSenderId: "810511946784",
  appId: "1:810511946784:web:f62e8c8ef29d588ffc9845"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user 
    await addDoc(collection(db, "user"),{
        uid :user.uid,
        name,
        authProvider: "local",
        email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login =async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
  toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = ()=>{
    signOut(auth)
}
export {auth, db,signup,login,logout}