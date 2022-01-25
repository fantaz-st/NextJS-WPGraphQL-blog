import { useContext } from 'react';
import ThemeContext from '../../../Store/theme-context';

import classes from './Checkbox.module.css';

const Checkbox = () => {
  const ctx = useContext(ThemeContext);

  const handleChangeTemeMode = (e) => {
    ctx.themeChangeHandler(e.target.checked);
  };

  return <input type="checkbox" className={classes.checkbox} onChange={handleChangeTemeMode} />;
};

export default Checkbox;
