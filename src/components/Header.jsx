import { signOut } from "firebase/auth";
import { userIconImg, logo } from "../assets/imageLinks";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";   

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((appStore) => appStore.user);
  // console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img className="max-w-44" src={logo} />{" "}
      {user && (
        <div className="flex">
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
