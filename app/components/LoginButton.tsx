"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  console.log(session)

  if (session) {
    return (
      <div>
        {/* <p>Welcome, {session.user?.name}!</p> */}
        <button onClick={() => signOut()} className="btn btn--secondary">Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("google")} className="btn btn--primary">Sign In with Google</button>;
}
