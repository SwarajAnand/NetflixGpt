import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { userIconImg, logo } from "../utils/constants";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";   
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((appStore) => appStore.user);

  useEffect(() => {
    const authStateChange = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid, displayName, email
          })
        );
        navigate("/browse");

      } else {
        console.log("user not found");
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => authStateChange();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Sucessfully")
      })
      .catch((err) => {
        navigate("/error");
        throw new Error(err);
      });
  };

  return (
    <div className="absolute z-20 px-8 py-4 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="max-w-44 max-h-12 m-5" src={logo} />{" "}
      {user && (
        <div className="flex m-2">
          <img
            src={userIconImg}
            alt="User Profile"
            className="max-w-16 max-h-16 rounded-sm"
          />
          <button
            onClick={handleSignOut}
            className="bg-[#ca1b24] h-10 w-[110px] text-white rounded-md m-4"
          >
            {" "}
            Sign Out{" "}
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Header;
