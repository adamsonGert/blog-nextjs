import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import { useTheme } from 'next-themes'
import { useState } from "react";

const ThemeToggle = () => {
const {theme, setTheme} = useTheme()
  return (
    <Around duration={750} className="dark:text-white text-gray-400 hover:text-gray-600 transition-opacity" onToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
  );
};

export default ThemeToggle;