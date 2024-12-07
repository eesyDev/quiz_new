"use client"
import React from 'react';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data: session } = useSession();
  return (
    <div className='dashboard'>
        {
            session ?
            <div className="welcome-user flex gap-6">
                <img src={session.user?.image || ''} alt={`${session.user?.name}'s avatar`} className='w-[60px] h-[60px] rounded-full items-center'/>
                <div className="user-info flex flex-col ">
                    <h2 className='h2'>Welcome, {session.user?.name}!</h2>
                    <span className="typo">Here overview of your course </span>
                </div>
            </div> :
            <div>
                Log in to proceed
            </div>
        }
        
    </div>
  )
}

export default Dashboard