import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router";

const Register = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-white via-slate-50 to-sky-50 p-6">
      <div className=" bg-white rounded-2xl shadow-lg overflow-hidden ">
        <div className="p-6 md:p-10">
          <h3 className="lg:text-5xl text-center text-sky-400 text-2xl font-bold mb-2">
            Register Now !
          </h3>
          <p className="text-lg py-3 text-center font-semibold mb-6 text-slate-600">
            Create a new account — it only takes a minute.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                name="fullName"
                className="mt-1 block w-full rounded-lg border p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Your full name"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 block w-full rounded-lg border p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    className="mt-1 block w-full rounded-lg border p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 "
                    placeholder="Enter password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                id="accept"
                name="acceptTerms"
                type="checkbox"
                className="mt-1 rounded text-sky-600 focus:ring-sky-400"
              />
              <label htmlFor="accept" className="text-sm text-slate-600">
                I accept the{" "}
                <a href="#" className="underline">
                  terms & conditions
                </a>
              </label>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full rounded-lg py-3 font-semibold shadow-sm bg-sky-400 text-white hover:bg-sky-800 disabled:opacity-60"
              >
                Register
              </button>

              <div className="flex items-center gap-3">
                <hr className="flex-1 border-t border-slate-200" />
                <span className="text-xs text-slate-400">or sign up with</span>
                <hr className="flex-1 border-t border-slate-200" />
              </div>

              <div className="w-full flex flex-col">
                {/* Google */}

                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>

            <p className="text-center text-sm  mt-3">
              Already have an account?{" "}
              <NavLink
                className="hover:text-blue-600 hover:underline font-bold "
                to="/login"
              >
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
