"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

import { RootState } from "../redux/rootReducer";
import { setTheme } from "../redux/slices/themeSlice";
import LoginButton from "./LoginButton";
import ThemeToggle from "./ThemeToggle";


const Header = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state: RootState) => state.theme.value);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			dispatch(setTheme(savedTheme));
			document.documentElement.setAttribute("data-theme", savedTheme);
		} else {
			const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
			const initialTheme = isDarkMode ? "dark" : "light";
			dispatch(setTheme(initialTheme));
		}
	}, [dispatch]);

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper flex justify-between">
					<div className="header__nav"></div>
					<div className="header__actions flex gap-6">
						<div className="input-layer">
							<CiSearch />
							<input type="search" className="input" placeholder="search..." />
						</div>
						<LoginButton />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
