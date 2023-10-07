"use server"
export default async function LogoutButton() {
    return (
      <form action="/auth/sign-out" method="post">
        <button className="rounded-full bg-twitterColor px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold bg-twitter ">
          Logout
        </button>
      </form>
    )
  }
  