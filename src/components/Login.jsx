import { app, auth } from "../firebase/Firebase";
import Header from "./Header";
import bgImg from "../assets/bgImg.jpg";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { signIn, signUp } from "../utils/LoginUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [toggler, setToggler] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // console.log(app);

  const handleLogin = async (e) => {


    e.preventDefault();
    if(!toggler && (name.length < 3)){
      setError("Enter a valid name")
      return;
    }

    let validate = checkValidData(email, password);
    setError(validate);
    if (!validate) {
      console.log("Not Validated");
      return;
    }


    let userData = (await (validate && toggler))
      ? signIn(email, password, auth)
      : signUp(email, password, auth, name, dispatch);

    userData.then(() => navigate("/browse")).catch(() => navigate("/"));

  };


  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute ">
        <img className="object-cover h-screen w-screen" src={bgImg} />{" "}
      </div>{" "}
      <form className="absolute p-12 w-3/12 mx-auto my-[10%] left-0 right-0 rounded-md bg-black bg-opacity-80 text-white ">
        <h1 className="text-3xl my-2 font-black">
          {" "}
          {toggler ? "Sign In" : "Sign Up"}{" "}
        </h1>{" "}
        <div className="w-full rounded-md text-white">
          {" "}
          {!toggler && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-inherit border bg-[#ffffff] border-slate-200 rounded-sm text-white"
            />
          )}{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-inherit border bg-[#ffffff] border-slate-200 rounded-sm text-white"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="p-2 my-4 w-full bg-inherit border bg-[#ffffff] border-slate-200 rounded-sm text-white"
          />
        </div>{" "}
        <p className="p-2 text-[#e50914] text-bold text-xl">{error}</p>
        <button
          onClick={handleLogin}
          className="loginBtn p-2 my-4 w-full rounded-sm bg-[#e50914] hover:bg-[#f6121dc9]"
        >
          {" "}
          {toggler ? "Sign In" : "Sign Up"}{" "}
        </button>{" "}
        <p onClick={() => setToggler(!toggler)} className="cursor-pointer">
          {" "}
          {toggler
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In"}{" "}
        </p>{" "}
      </form>{" "}
    </div>
  );
};

export default Login;
