import { ref as VueRef } from 'vue'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0BZawR9IcXqSUB18N5M7GnpUhCRvaA_A",
  authDomain: "danielpincu-bfbfa.firebaseapp.com",
  projectId: "danielpincu-bfbfa",
  storageBucket: "danielpincu-bfbfa.appspot.com",
  messagingSenderId: "72266102154",
  appId: "1:72266102154:web:008929fe5bb16316d50473"
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
