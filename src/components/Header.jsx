import { useState, useEffect } from "react";
import "./Header.css";
import { signInWithGoogle, signOut, useDbUpdate } from "../utils/firebase";

const SignInButton = () => (
  <button className="button-base sign-in-button" onClick={signInWithGoogle}>Sign In</button>
);

const SignOutButton = () => (
  <button className="button-base sign-out-button" onClick={signOut}>Sign Out</button>
);

const Header = ({ currentUser, users }) => {
  const uid = !currentUser ? "guest" : currentUser.uid;
  const [update, result] = useDbUpdate(`users/${uid}`);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!currentUser) {
      return;
    };

    if (users.filter(user => user.uid === uid).length === 0) {
      update({
        uid: uid,
        email: currentUser.email,
        "puzzle_mode": "word"
      })
    };
  }, [currentUser]);

  useEffect(() => {
    setInterval(
      () => setTime(new Date())
    , 1000)
  }, []);

  return (
    <div className="header">
      <div className="clockin">ClockIn</div>
      <h1>{time.toLocaleTimeString()}</h1>
      {
        currentUser
        ? <SignOutButton />
        : <SignInButton />
      }
    </div>
  );
}
export default Header
