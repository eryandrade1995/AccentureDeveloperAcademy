import { useState } from 'react';

export default function useTheme() {

const themeLight = {
    primary: "lightsteelblue",
    secondary: "black",
    highlight: "pink",
    width: "4000px",
  };

const themeDark = {
    primary: "black",
    secondary: "lightsteelblue",
    highlight: "pink",
    width: "4000px",
  };

const [theme, setTheme] = useState(themeLight);

const changeTheme = () => {
    if (theme.primary === "lightsteelblue") {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  }

return {
    theme, changeTheme
  };
}