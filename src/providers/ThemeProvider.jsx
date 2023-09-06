"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
