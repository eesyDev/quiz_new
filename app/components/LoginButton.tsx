"use client"
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { client } from '../utils/client';
import { setAuthState } from "../redux/slices/authSlice";

export default function LoginButton() {
  const [user, setUser] = useState<IUser | null>();
  const { data: session } = useSession();
  const dispatch = useDispatch();

  console.log(session)
  useEffect(() => {
    if (session) {
       createUser(session);
       setUser(session.user)
    }
 }, [session]); 

  const generateUserId = (email: string) => {
    return email.replace(/[^a-zA-Z0-9_-]/g, '');
 };

  const createUser = async(sessionData: any) => {
    const { name, image, email } = sessionData.user;

    const user = {
        _id: generateUserId(email),
        _type: 'user',
        userName: name,
        image: image,
        email: email,
        role: 'student'
    }
    try {
        await client.createIfNotExists(user);
        console.log('OK')
        dispatch(setAuthState({ 
            data: user, 
            isLoggedIn: true 
        }));
    } catch (error) {
        console.error("Error creating user in Sanity:", error);
    }
    // await axios.post('/api/users', user)
}

  if (session) {
    return (
      <div>
        {/* <p>Welcome, {session.user?.name}!</p> */}
        <button onClick={() => signOut()} className="btn btn--primary">Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("google")} className="btn btn--primary">Sign In with Google</button>;
}
