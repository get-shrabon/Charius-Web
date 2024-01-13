/* eslint-disable react/no-unescaped-entities */
import Logo from "../../../assets/logo.png";
import LoginImg from "../../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const handlePhotoURL = (e) => {
    setPhotoURL(e.target.value);
  };
  const { createUser, googleLogin, facebookLogin } = useContext(AuthContext);
  const navigate = useNavigate();

//   Google Login
const handleGoogleLogin = () => {
    googleLogin()
    .then(() => {
        console.log("google login success")
        navigate(`/`)
    })
    .catch(error => {
        setErrorMessage(error.message)
    })
}
//   Facebook Login
const handleFacebookLogin = () => {
    facebookLogin()
      .then(() => {
        console.log("google login success");
        navigate(`/`);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
}

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const condition = e.target.checkbox.checked;
    errorMessage("")
    // Validation
        {
          if (!condition) {
            setErrorMessage("Please Accept Our Conditions!");
            return;
          } else if (password < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            return;
          } else if (!/[A-Z]/.test(password)) {
            setErrorMessage(
              "Password must contain at least one uppercase letter"
            );
            return;
          } else if (!/[a-z]/.test(password)) {
            setErrorMessage(
              "Password must contain at least one lowercase letter"
            );
            return;
          }
        }
    // Create User
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate(`/login`);
        updateProfile(result.user, {
          displayName: `${name}`,
          photoURL: `${photoURL}`,
          
        });
        console.log(result.user)
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 custom-shadow rounded">
        <div className="p-10 bg-[#062265] rounded-l space-y-5">
          <div className="flex items-center justify-between">
            <img src={Logo} alt="" />
            <Link to={`/login`}>
              <button className="bg-white border-2 border-white text-black px-3 py-2 duration-500 hover:bg-transparent hover:text-white">
                Log In
              </button>
            </Link>
          </div>
          <img src={LoginImg} alt="" />
          <Link>
            <button className="bg-white border-2 border-white text-black px-3 py-2 duration-500 hover:bg-transparent hover:text-white">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="p-10">
          <form onSubmit={handleSignUp} className="space-y-5">
            <div className="pb-5">
              <h3 className="text-2xl">Create Account</h3>
              <p className="text-slate-600">Sign into your pages account</p>
            </div>
            <div>
              <p className="pb-2">Your Name</p>
              <input
                className="border-warning border bg-transparent outline-none w-full p-3 rounded text-black "
                type="name"
                name="name"
                required
                id=""
                placeholder="Type your name..."
              />
            </div>

            <div>
              <p className="pb-2">Photo URL (Optional)</p>
              <input
                className="border-warning border bg-transparent outline-none w-full p-3 rounded text-black "
                type="text"
                name="photo"
                value={photoURL}
                onChange={handlePhotoURL}
                id=""
                placeholder="Enter your photo url..."
              />
            </div>
            <div>
              <p className="pb-2">Email Address</p>
              <input
                className="border-warning border bg-transparent outline-none w-full p-3 rounded text-black "
                type="email"
                name="email"
                required
                id=""
                placeholder="demo@gmail.com"
              />
            </div>
            <div>
              <p className="pb-2">Password</p>
              <div className="flex items-center relative">
                <input
                  className="border-warning border bg-transparent outline-none w-full p-3 rounded text-black "
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  id=""
                  placeholder="123S@#12"
                />
                <p
                  className="cursor-pointer text-xl absolute right-6"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <IoMdEyeOff /> : <IoMdEye />}
                </p>
              </div>
            </div>
            <div>
              {errorMessage && (
                <p className="text-error text-[14px]">{errorMessage}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  className="checkbox checkbox-warning"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <label className="cursor-pointer" htmlFor="checkbox">
                  Accept our{" "}
                  <a className="underline" href="# ">
                    Terms and Conditions?
                  </a>
                </label>
              </div>
              <Link className="text-yellow-500">Forget Password ?</Link>
            </div>
            <button className="theme-btn w-full">Create Account</button>
          </form>
          <div className="mt-10 space-y-10">
            <div className="flex-none md:flex items-center gap-2 ">
              <div className="h-1 border-t border-dashed w-full border-slate-400"></div>
              <p className="font-ubuntu italic text-warning">Or</p>
              <div className="h-1 border-t border-dashed w-full border-slate-400"></div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <button
                onClick={handleFacebookLogin}
                className="p-4 rounded-lg bg-[#3B5998] text-white"
              >
                {" "}
                <FaFacebookF />
              </button>
              <button
                onClick={handleGoogleLogin}
                className="p-4 rounded-lg bg-slate-300 text-black"
              >
                {" "}
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
