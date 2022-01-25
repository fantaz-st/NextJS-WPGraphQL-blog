import React, { useState } from 'react';

import { lightTheme, darkTheme } from '../styles/theme/theme';

const ThemeContext = React.createContext({
  themeMode: 'light',
});

export const ThemeContextProvider = (props) => {
  const [themeMode, setThemeMode] = useState(lightTheme);

  const onSetThemeMode = () => {
    setThemeMode((prevValue) => (prevValue === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider
      value={{
        themeChangeHandler: onSetThemeMode,
        activeThemeMode: themeMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
