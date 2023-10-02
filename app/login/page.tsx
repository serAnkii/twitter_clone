"use client";
import "@/app/globals.css"
import { toast } from "sonner";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const revalidate = 0;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uname, changeUname] = useState("");
  const router = useRouter();

  const supabase = createClientComponentClient<Database>();

  async function handleSignUp() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { username: uname },
      },
    });


    if (error) {
      toast.error(error.message)
      return;
    } else {
      toast.success("user Created sucessfully , Please Login");
    }

    // const {data:udata,error:err}  = await supabase.from("profiles").select().eq('username',uname.trim())

    // if(udata){
    //   window.alert("username taken ,please choose another")
    //   return
    // }
    
    // Create a corresponding record in the 'profiles' table
    await supabase.from("profiles").upsert({
      id: data?.session?.user.id,
      username: uname,
    } as any);
  }

  // Function to handle user log-in

  async function handleLogIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    else{
    toast.loading("Logging In")
    router.push(location.origin);
    router.refresh()
    }
  }

  return (
    <>
      <div id="mainloginpage" className="bg-black h-screen w-screen flex  flex-col absolute left-0 z-50">
        <h1 className="text-[5vw] w-screen text-center font-bold text-twitter">
          Twitter <span className="text-pink-600"> X</span>{" "}
        </h1>
        <div  className="flex w-screen h-[70%] ">
          <div id="sign-in" className="w-[50%] p-4 h-[100%] m-2  ">
            <h1 className="text-4xl text-center tracking-[0.5rem] w-100%">LOGIN</h1>
            
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" flex flex-col justify-center items-center gap-10"
            >
              <input
                name="email"
                className="text-slate-950 rounded-xl text-center"
                placeholder="Enter a vaid email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="text-slate-950 rounded-xl text-center"
                placeholder="Enter a strong Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <div className="flex justify-center items-center">
            <button
              onClick={handleLogIn}
              className=" bg-twitter text-3xl font-bold w-[40%] h-[70%] rounded-full hover:scale-105 transition-all duration-200"
            >
              Sign-in
            </button>
            </div>
          </div>

          <div id="sign-up" className="w-[50%] p-4 h-[100%]">
            <h1 className="text-4xl tracking-[0.5rem] text-center w-[100%]">SIGN UP</h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <input
                name="email"
                className="text-slate-950 rounded-xl text-center"
                placeholder="Enter a vaid email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="text-slate-950 rounded-xl text-center"
                placeholder="Enter a strong Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="text-slate-950 rounded-xl text-center"
                placeholder="Enter your username"
                type="text"
                name="uname"
                onChange={(e) => changeUname(e.target.value)}
              />
            </form>
            <div className="flex justify-center items-center">
            <button
              onClick={handleSignUp}
              className=" bg-twitter text-3xl font-bold w-[40%] h-[70%] rounded-full hover:scale-105 transition-all duration-200"
            >
              Sign-up
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const Signout = async () => {
  const router = useRouter();

  const supabase = createClientComponentClient<Database>();
  async function handlesignout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }
    else{
    toast.success("SIGNED OUT")
    router.push("/login");
    router.refresh();
    }
  }

  return (
    <button
      onClick={handlesignout}
      className="bg-twitter flex items-center justify-center p-2 rounded-xl hover:bg-[#126298] font-bold "
    >
      Sign-out
    </button>
  );
};
