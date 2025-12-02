import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-white via-slate-50 to-sky-50 p-6">
      <div className="w-6/12 bg-white rounded-2xl shadow-lg overflow-hidden grid  md:grid-cols-1">
        {/* Right - Form */}
        <div className="p-6 md:p-10">
          <h3 className="lg:text-4xl text-sky-400 text-center text-2xl font-bold mb-2">
            Login Now !
          </h3>

          <form className="space-y-4">
            {/* full name */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                name="fullName"
                className="mt-1 block w-10/12 rounded-lg border p-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Your full name"
              />
            </div>

            <div className="flex justify-between items-center gap-5">
              {/* email */}
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

              {/* password / confirm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      className="mt-1 block w-full rounded-lg border p-3 pr-12 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 "
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      aria-label="Toggle password visibility"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded-md"
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            {/* terms */}
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

            {/* submit */}
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full rounded-lg py-3 font-semibold shadow-sm bg-sky-400 text-white hover:bg-sky-800 disabled:opacity-60"
              >
                Login
              </button>

              <div className="flex items-center gap-3">
                <hr className="flex-1 border-t border-slate-200" />
                <span className="text-xs text-slate-400">or sign up with</span>
                <hr className="flex-1 border-t border-slate-200" />
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-3">
              Already have an account?{" "}
              <a href="#" className="underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
