import Header from "./Header";
import bgImg from "../assets/bgImg.jpg";

const Login = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute ">
        <img className="object-cover h-screen w-screen" src={bgImg} />{" "}
      </div>{" "}
      <form className="absolute p-12 w-3/12 mx-auto my-[10%] left-0 right-0 rounded-md bg-black bg-opacity-80 text-white ">
        <h1 className="text-3xl my-2 font-black"> Sign In </h1>{" "}
        <div className="w-full rounded-md text-white">
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-inherit border bg-[#ffffff] border-slate-200 rounded-sm text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-inherit border bg-[#ffffff] border-slate-200 rounded-sm text-white"
        />
        </div>
        <button className="loginBtn p-2 my-4 w-full rounded-sm bg-[#e50914] hover:bg-[#f6121dc9]"> Sign In </button>{" "}
        <p>New to Netflix? Sign Up Now </p>
      </form>
    </div>
  );
};

export default Login;
