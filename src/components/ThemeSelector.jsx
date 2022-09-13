import { getTheme } from '../lib/hooks/useTheme';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';
import style from './ThemeSelector.module.css';

const ThemeSelector = ({ theme, setTheme }) => {
	const themeClass = getTheme(style, theme);
	const getIcon = (theme, themeClass) => {
		if (theme === 'light')
			return <MoonIcon className={`${style.icon} ${themeClass}`} />;
		if (theme === 'dark')
			return <SunIcon className={`${style.icon} ${themeClass}`} />;

		return null;
	};

	const icon = getIcon(theme, themeClass);
	const color = theme === 'dark' ? 'light' : 'dark';

	return (
		<div className={style.themeSelector}>
			<h2>devfinder</h2>
			<div className={style.iconContainer}>
				{color.toUpperCase()}
				<button className={style.button} onClick={() => setTheme(color)}>
					{icon}
				</button>
			</div>
		</div>
	);
};

export default ThemeSelector;
