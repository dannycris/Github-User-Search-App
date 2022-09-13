import style from './App.module.css';
import CustomCursor from './components/Cursor/CustomCursor';
import InputSearch from './components/InputSearch';
import ThemeSelector from './components/ThemeSelector';
import UserCard from './components/UserCard';
import { useSearchUser } from './lib/hooks/useSearchUser';
import { getTheme, useTheme } from './lib/hooks/useTheme';

const App = () => {
	const { user, error, loading, setSearch } = useSearchUser();
	const { theme, setTheme } = useTheme();
	const themeClass = getTheme(style, theme);

	return (
		<>
			<CustomCursor theme={theme} />
			<div className={`${style.wrapper} ${themeClass}`}>
				<div className={style.container}>
					<ThemeSelector theme={theme} setTheme={setTheme} />
					<InputSearch theme={theme} setSearch={setSearch} />
					<UserCard
						theme={theme}
						setTheme={setTheme}
						user={user}
						error={error}
						loading={loading}
						setSearch={setSearch}
					/>
				</div>
			</div>
		</>
	);
};

export default App;
