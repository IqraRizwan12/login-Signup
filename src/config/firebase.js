// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth"
import { getFirestore ,collection, addDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChVAqkMi-XNAhIPtz3gGzg1D08m8XPy9A",
  authDomain: "olx-ems21.firebaseapp.com",
  projectId: "olx-ems21",
  storageBucket: "olx-ems21.appspot.com",
  messagingSenderId: "1028342069821",
  appId: "1:1028342069821:web:a106a28d2a8a9a8792c854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

function register(email,password,firstName,lastName){
    createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert('Successfully Registered')
    try {
        const docRef = await addDoc(collection(db, "users"), {
          firstName:firstName ,
          lastName: lastName,
          Email: email
        });
        alert('Successfully Registered')
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert(e.message)
      }
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
}

function login(email,password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('Successfully Logged In')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });
}



export {register,login}
