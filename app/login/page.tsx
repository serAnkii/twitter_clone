import "@/app/globals.css";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <div
        id="mainloginpage"
        className="bg-black h-screen w-screen flex  flex-col absolute left-0 z-50"
      >
        <h1 className="text-[5rem] w-screen text-center font-bold text-twitter">
          Twitter <span className="text-pink-600"> X</span>
        </h1>

        <div className="flex w-screen h-[70%] ">
          <div className="flex w-screen h-[100%] ">
            <div
              id="sign-in"
              className=" backdrop-blur-sm w-[100%] p-4 h-[100%] flex flex-col gap-5 "
            >
              <h1 className="text-4xl text-center tracking-[0.5rem] w-100%">
                LOGIN
              </h1>

              <form
                id="form-signin"
                className="items-center justify-center"
                action="/auth/sign-in"
                method="post"
              >
                <input
                  name="email"
                  className="text-slate-950 rounded-xl text-center"
                  placeholder="Enter a vaid email"
                  required
                />
                <input
                  className="text-slate-950 rounded-xl text-center"
                  placeholder="Enter your Password"
                  type="password"
                  name="password"
                />

                <div className="flex justify-center w-full items-center">
                  <button className=" bg-twitter text-3xl font-bold p-4 rounded-full hover:scale-105 transition-all duration-200">
                    Sign-in
                  </button>
                </div>
                <div className="flex justify-center items-center">
                <Link
                  href={"/signup"}
                  className="font-bold"
                >
                  New User?Sign-up!
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
