"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { RootState } from "../redux/rootReducer";
import { setTheme } from "../redux/slices/themeSlice";
import LoginButton from "./LoginButton";
import ThemeToggle from "./ThemeToggle";
import logoWhite from '../../public/icons/logo_white.svg';
import logoDark from '../../public/icons/logo_dark.svg';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);
  const logo = theme === 'dark' ? logoWhite : logoDark;

  // Определение темы при загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    } else {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = isDarkMode ? "dark" : "light";
      dispatch(setTheme(initialTheme));
    }
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <Link href="/">
              {logo && <img src={logo} alt="logo" />}
            </Link>
          </div>
          <ThemeToggle/>
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
