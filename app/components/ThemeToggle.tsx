import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/rootReducer";
import { setTheme } from "../redux/slices/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme  = useSelector((state: RootState) => state.theme.value);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);

    console.log(newTheme)
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </button>
  );
};

export default ThemeToggle;
