import { ref as VueRef } from 'vue'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, onSnapshot } from "firebase/firestore";

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
  const introData = VueRef([]);
  const historyData = VueRef([]);
  const familyData = VueRef([]);
  const nightData = VueRef([]);
  const faqData = VueRef([]);
  const footerData = VueRef([]);

  const EN = collection(db, 'Fantasy Quest Esbjerg');
  const introDocRef = doc(EN, 'Intro');
  const historyDocRef = doc(EN, 'History');
  const familyDocRef = doc(EN, 'Family');
  const nightDocRef = doc(EN, 'Night');
  const faqDocRef = doc(EN, 'FAQ');
  const footerDocRef = doc(EN, 'Footer');

  const fetchIntroData = async () => {
    onSnapshot(introDocRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        introData.value = [data];
      } else {
        console.log("No such document for Intro!");
      }
    });
  };

  const fetchHistoryData = async () => {
    onSnapshot(historyDocRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        historyData.value = [data];
      } else {
        console.log("No such document for History!");
      }
    });
  };

  const fetchFamilyData = async () => {
    onSnapshot(familyDocRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        familyData.value = [data];
      } else {
        console.log("No such document for Family!");
      }
    });
  };

  const fetchNightData = async () => {
    onSnapshot(nightDocRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        nightData.value = [data];
      } else {
        console.log("No such document for Night!");
      }
    });
  }

  const fetchFaqData = async () => {
    onSnapshot(faqDocRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        faqData.value = [data];
      } else {
        console.log("No such document for FAQ!");
      }
    });
  }

  const fetchFooterData = async () => {
    onSnapshot(footerDocRef, async (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        footerData.value = [data];
      } else {
        console.log("No such document for Footer!");
      }
    });
  }

  const fetchData = async () => {
    await Promise.all([ fetchIntroData(), fetchHistoryData(), fetchFamilyData(), fetchNightData(), fetchFaqData(), fetchFooterData() ]);
  };

  return {
    introData,
    historyData,
    familyData,
    nightData,
    fetchData,
    faqData,
    footerData
  };
};

export default remoteData;
