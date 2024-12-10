"use client"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TbFileCode } from "react-icons/tb";
import Link from 'next/link';

import { pagesSidebar } from '../data/data';
import { RootState } from "../redux/rootReducer";
import logoWhite from '/public/icons/logo_white.svg';
import logoDark from '/public/icons/logo_dark.svg';
import ThemeToggle from './ThemeToggle';


const Sidebar = () => {
    const theme = useSelector((state: RootState) => state.theme.value);

    const [logo, setLogo] = useState(theme === 'dark' ? logoWhite : logoDark);

    useEffect(() => {
        setLogo(theme === 'dark' ? logoWhite : logoDark)
      }, [theme]);


  return (
    <aside className='sidebar py-12 px-8'>
        <div className="sidebar__logo">
            <Link href="/" className='px-4 flex justify-start'>
              {logo && <img src={logo.src} alt="logo" />}
            </Link>
          </div>
        <ul className='links flex flex-col mt-8 gap-3'>
        {
            pagesSidebar.map((item, index) => {
                const Icon = item.icon; // icon content
                return (
                    <li key={index} className=''>
                    <Link href={item.link} className='flex gap-2 items-center py-2 px-4'>
                        <Icon className='icon'/>
                    {item.name}
                    </Link></li>
                )
                })
        }
        </ul>
        <ThemeToggle/>
    </aside>
  )
}

export default Sidebar