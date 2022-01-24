import { useState } from 'react';

export default function Theme() {

const themeLight = {
    primary: "white",
    secondary: "black",
    highlight: "pink",
    width: "4000px",
  };

const themeDark = {
    primary: "black",
    secondary: "white",
    highlight: "pink",
    width: "4000px",
  };


const [theme, setTheme] = useState(themeLight);

const changeTheme = () => {
    if (theme.primary === "white") {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }

return {
    theme, changeTheme
  };
}