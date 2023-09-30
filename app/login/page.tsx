"use client";

import { Database } from "@/lib/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uname, changeUname] = useState('');
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
      window.alert(error.message);
      return;
    } else {
      window.alert("user Created sucessfully");
    }

    // Create a corresponding record in the 'profiles' table
    await supabase.from("profiles").upsert({
      id: data?.session?.user.id,
      username: data.user?.user_metadata.username,
    } as any);
  }

  // Function to handle user log-in

  async function handleLogIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      window.alert(error);
      // return;
    }
    router.push(location.origin);
  }

  return (
    <>
      <div className="bg-black h-screen w-screen flex  flex-col">
        <h1 className="text-[5vw] w-screen text-center font-bold text-twitter">Welcome To the Twitter but Better</h1>
        <div className="flex">
        <div className="h-screen w-[50%] justify-center items-center flex flex-col gap-4">
          <h1>LOGIN</h1>
          <form onSubmit={(e)=>e.preventDefault()} className="justify-center items-center flex flex-col gap-5">
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
            <button
              onClick={handleLogIn}
              className=" bg-twitter p-3 rounded-xl"
            >
              Sign-in
            </button>
          </form>
        </div>
        <div className="h-screen w-[50%] justify-center items-center flex flex-col gap-4">
          <h1>SIGN_UP</h1>
          <form onSubmit={e=>e.preventDefault()} className="justify-center items-center flex flex-col gap-5">
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

            <button
              onClick={handleSignUp}
              className="bg-twitter p-3 rounded-xl"
            >
              Sign-up
            </button>
          </form>
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
      window.alert(error.message);
      return;
    }
    router.push("/login");
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
