import { ref as VueRef } from 'vue'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS9_9iAkcMkKwrjwSTIkyONgR-I6FQOP0",
  authDomain: "exam-6d170.firebaseapp.com",
  projectId: "exam-6d170",
  storageBucket: "exam-6d170.appspot.com",
  messagingSenderId: "746378805997",
  appId: "1:746378805997:web:7ca166345f8ea986d882e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const remoteData = () => {
  const downloadedData = VueRef([])

  const EN = collection(db, 'EN')

  const fetchData = async () => {
    onSnapshot(EN, async (snapshot) => {
      const newData = [];

      for (const doc of snapshot.docs) {
        const data = doc.data();
        
       

        newData.push(data);
      }

      downloadedData.value = newData;
    })
  }

  return {
    downloadedData,
    fetchData,
  }
}

export default remoteData;
