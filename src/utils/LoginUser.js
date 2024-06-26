import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../store/userSlice";

export const signUp = async (emailAdd, password, auth, userName, dispatch) => {
  // First Time
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailAdd,
      password
    );
    const user = await userCredential.user;

    
    updateProfile(user, {
      displayName: userName,
    }).then(() => {
      console.log("Profile updated");
      const { uid, displayName, email } = user;
      dispatch(
        addUser({
          uid,
          displayName,
          email,
        })
      );
    });

    return user;
  } catch (error) {
    console.error("Error in signIn:", error);
    throw error;
  }
};

export const signIn = async (email, password, auth) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = await userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.error("Error in signIn:", error);
    throw error;
  }
};
