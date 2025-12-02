import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-white via-slate-50 to-sky-50 p-6">
      <div className="w-6/12 bg-white rounded-2xl shadow-lg overflow-hidden grid  md:grid-cols-1">
        {/* Right - Form */}
        <div className="p-6 md:p-10">
          <h3 className="lg:text-5xl text-sky-400 text-2xl font-bold mb-2">
            Register Now !
          </h3>
          <p className="text-lg py-3 font-semibold mb-6 text-slate-600">
            Create a new account — it only takes a minute.
          </p>

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
                Register
              </button>

              <div className="flex items-center gap-3">
                <hr className="flex-1 border-t border-slate-200" />
                <span className="text-xs text-slate-400">or sign up with</span>
                <hr className="flex-1 border-t border-slate-200" />
              </div>

              {/* social buttons (centered, equal width) */}
              <div className="w-full flex flex-col items-center gap-3">
                {/* Google */}
                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="max-w-sm w-full flex items-center gap-3 justify-start rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white">
                    <svg
                      viewBox="0 0 533.5 544.3"
                      className="h-5 w-5"
                      aria-hidden
                    >
                      <path
                        fill="#4285F4"
                        d="M533.5 278.4c0-18.9-1.5-37.1-4.3-54.8H272v103.8h147.3c-6.3 34.1-25.6 62.9-54.6 82.3v68.4h88.3c51.7-47.6 81.5-117.8 81.5-199.7z"
                      />
                      <path
                        fill="#34A853"
                        d="M272 544.3c73.6 0 135.5-24.5 180.6-66.5l-88.3-68.4c-24.6 16.5-56.1 26.2-92.3 26.2-70.9 0-131.2-47.8-152.6-112.2H28.1v70.6C73.1 485.5 165.3 544.3 272 544.3z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M119.4 325.4c-10.9-32.6-10.9-67.8 0-100.4V154.4H28.1c-39.8 78.3-39.8 171.3 0 249.6l91.3-78.6z"
                      />
                      <path
                        fill="#EA4335"
                        d="M272 107.7c39.9 0 75.8 13.7 104 40.6l78.1-78.1C407.3 24.8 345.4 0 272 0 165.3 0 73.1 58.8 28.1 154.4l91.3 70.6C140.8 155.5 201.1 107.7 272 107.7z"
                      />
                    </svg>
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">
                    Continue with Google
                  </span>
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  aria-label="Continue with GitHub"
                  className="max-w-sm w-full flex items-center gap-3 justify-start rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                      <path
                        fill="#111827"
                        d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.95 3.2 9.15 7.64 10.63.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.72 2.65 1.22 3.29.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.4.11-2.92 0 0 .95-.31 3.11 1.15a10.7 10.7 0 0 1 2.83-.38c.96 0 1.93.13 2.83.38 2.15-1.46 3.1-1.15 3.1-1.15.62 1.52.24 2.64.12 2.92.72.78 1.16 1.77 1.16 2.99 0 4.3-2.62 5.24-5.11 5.52.4.35.76 1.03.76 2.07 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54C20.06 20.9 23.25 16.7 23.25 11.76 23.25 5.48 18.27.5 12 .5z"
                      />
                    </svg>
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">
                    Continue with GitHub
                  </span>
                </button>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-3">
              Already have an account?{" "}
              <a href="#" className="underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
