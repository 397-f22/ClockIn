
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update, set } from 'firebase/database';
import { useEffect, useState, useCallback } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvAWkjUPwpWWw9FLeMZlBqqQK72BAg7uM",
  authDomain: "clockin-a0a9b.firebaseapp.com",
  projectId: "clockin-a0a9b",
  storageBucket: "clockin-a0a9b.appspot.com",
  messagingSenderId: "392310330405",
  appId: "1:392310330405:web:3ba87fc197a064200f1bcc",
  measurementId: "G-5LC1S7W8WJ"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

// export const overrideDbData = (path, newData) => {
//   set(ref(database, path), {
//     newData.
//   });
// };

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
      setData(snapshot.val());
    }, (error) => {
      setError(error);
    })
  ), [path]);

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
}

// setData: easier to use, not sure if it only works with existing database paths
export const setData = (path, value) => (
  set(ref(database, path), value)
);

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};
