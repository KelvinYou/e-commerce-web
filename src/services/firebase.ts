// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getMessaging } from "firebase/messaging";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import firebaseConfig from "./config";

export const Firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(Firebase);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() };
export const db = getFirestore(Firebase);