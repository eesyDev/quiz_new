"use client"
import React from 'react';
import { IoIosCheckmarkCircleOutline, IoIosLaptop } from "react-icons/io";
import { IoEyeOutline, IoTrophyOutline, IoStatsChart } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";

import { useSession } from 'next-auth/react';
import PieChart from './PieChart';
import DesktopCard from './DesktopCard';
import DesktopCardExtended from './DesktopCardExtended';


const Dashboard = () => {
    const { data: session } = useSession();
    return (
        <div className='dashboard'>
            {
                session ?
                    <div className="welcome-user flex gap-6">
                        <img src={session.user?.image || ''} alt={`${session.user?.name}'s avatar`} className='w-[60px] h-[60px] rounded-full items-center' />
                        <div className="user-info flex flex-col ">
                            <h2 className='h2'>Welcome, {session.user?.name}!</h2>
                            <span className="typo">Here overview of your course </span>
                        </div>
                    </div> :
                    <div>
                        Log in to proceed
                    </div>
            }

            {
                session && (
                    <>
                        <div className="dashboard-cards flex mt-12 gap-4 flex-wrap">
                            <DesktopCard
                                title="Твои результаты"
                                icon={<IoTrophyOutline />}
                                content='50/123'
                                classNameProp="flex-1"
                            />
                            <DesktopCard
                                title="Выполненые задания"
                                icon={<IoIosCheckmarkCircleOutline />}
                                content='50/123'
                                classNameProp="flex-1"
                            />
                            <DesktopCard
                                title="Результаты тестов"
                                icon={<BsFileEarmarkText />}
                                content='50/123'
                                classNameProp="flex-1"
                            />
                        </div>
                        <div className="dashboard-cards-extended flex mt-12 gap-4">
                            <div className="dashboard-cards-outer w-2/3">
                                <h2 className="dashboard-card-header">
                                    Твои курсы
                                </h2>
                                <div className="dashboard-cards flex mt-6 gap-4">
                                <DesktopCardExtended
                                    title="Выполненые задания"
                                    icon={<IoIosCheckmarkCircleOutline />}
                                    content='50/123'
                                    classNameProp="card-extended w-1/2"
                                    totalLessons={40}
                                    completedLessons={12}
                                />
                                <DesktopCardExtended
                                    title="Результаты тестов"
                                    icon={<BsFileEarmarkText />}
                                    content='50/123'
                                    classNameProp="card-extended w-1/2"
                                    totalLessons={30}
                                    completedLessons={6}
                                />
                                </div>
                            </div>
                            <div className="card w-1/3">
                                <div className="card__header">
                                    <h4 className="card__title">Статистика заданий</h4>
                                    <span className="card__icon"><IoStatsChart /></span>
                                </div>
                                <div className="card__content">
                                    <PieChart />
                                </div>
                            </div>
                            
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Dashboard