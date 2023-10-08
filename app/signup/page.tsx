import "@/app/globals.css";
import { getuserdata } from "@/utility/helpers";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function Login() {
  const { uname } = await getuserdata();

  if (uname) {
    redirect("/");
  }

  return (
    <>
      <div
        id="mainloginpage"
        className="bg-black h-screen w-screen flex  flex-col absolute left-0 z-50"
      >
        
        <h1 className="text-[5rem] w-screen text-center font-bold text-twitter">
          Twitter <span className="text-pink-600"> X</span>
        </h1>

        <div className="flex w-screen h-[70%]">
          <div className="flex w-screen h-[100%] ">
            <div
              id="sign-up"
              className="backdrop-blur-sm w-[100%] p-4 h-[100%]  flex flex-col"
            >
              <h1 className="text-4xl tracking-[0.5rem] text-center w-[100%]">
                SIGN UP
              </h1>

              <form
                id="from_signup"
                action="/auth/sign-up"
                method="post"
                className=" justify-center items-center"
              >
                <input
                  name="email"
                  className="text-slate-950 rounded-xl text-center"
                  placeholder="Enter a vaid email"
                  required
                />
                <input
                  className="text-slate-950 rounded-xl text-center"
                  placeholder="Enter a strong Password"
                  type="password"
                  name="password"
                />

                <input
                  className="text-slate-950 rounded-xl text-center"
                  placeholder="Enter your username"
                  type="text"
                  name="uname"
                />
                <div className="flex justify-center w-full items-center ">
                  <button className=" bg-twitter text-3xl font-bold rounded-full hover:scale-105 p-4 transition-all duration-200">
                    Sign-up
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <Link href={"/login"} className="font-bold">
                    Sign-in?
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
