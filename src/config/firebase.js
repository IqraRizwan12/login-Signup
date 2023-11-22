// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, addDoc, getDocs, doc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getDoc } from "firebase/firestore"





// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAqWAAoN-xiLym7okVn33n12cbLxQN8Opo",
  authDomain: "olx-website-94aa5.firebaseapp.com",
  projectId: "olx-website-94aa5",
  storageBucket: "olx-website-94aa5.appspot.com",
  messagingSenderId: "804685639956",
  appId: "1:804685639956:web:f267d481f5c95297a35201",
  measurementId: "G-HP4GH36PF5"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyChVAqkMi-XNAhIPtz3gGzg1D08m8XPy9A",
//   authDomain: "olx-ems21.firebaseapp.com",
//   projectId: "olx-ems21",
//   storageBucket: "olx-ems21.appspot.com",
//   messagingSenderId: "1028342069821",
//   appId: "1:1028342069821:web:a106a28d2a8a9a8792c854"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)





// async function register(email, password, firstName, lastName) {

//   fetch('http://localhost:3000/users/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//       fullname: firstName
//     })
//   }).then(res => res.json())
//     .then(res => console.log(res))


//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//     const docRef = await addDoc(collection(db, "users"), {
//       firstName:firstName ,
//       lastName: lastName,
//       Email: email
//     });
//     alert('Successfully Registered')

//   } catch (e) {

//     alert(e.message)
//   }

// }

// function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password)

// }


// async function postAd(title, description, price, file) {

//   const url = await uploadImage(file)

//   fetch('http://localhost:3000/ads/addData', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title,
//       description,
//       price,
//       imageUrl: url
//     })
//   }).then(res => res.json())
//     .then(res => console.log(res))
//     .catch(e => console.log('e --->', e))

//   try {
//      const url = await uploadImage(file)
//      await addDoc(collection(db, "ads"), {
//        title,
//        description ,
//        price,
//        imageUrl:url

//     });

//     alert('Ad posted successfully')
//   } catch (e) {
//     alert(e.message)
//   }
// }

async function uploadImage(file) {
  try {
    const storageRef = ref(storage, 'ads/' + file.name);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  } catch (e) {
    alert(e.message)

  }
}

// async function getAds() {


//     const querySnapshot = await getDocs(collection(db, "ads"));
//     const ads = []
//    querySnapshot.forEach((doc) => {
//     const data = doc.data()
//     data.id = doc.id
//     ads.push(data)
//     // console.log(ads)

//   });
//   return ads


// }

async function detail(id) {


  //   const docRef = doc(db, "ads", id );

  //   try {
  //     const docSnap = await getDoc(docRef);
  //     if(docSnap.exists()) {
  //         // console.log(docSnap.data());
  //         const ads = docSnap.data()

  //     } else {
  //         console.log("Document does not exist")
  //     }
  //     return docSnap.data()


  // } catch(error) {
  //     console.log(error)
  // }


}


export {   detail,uploadImage }
