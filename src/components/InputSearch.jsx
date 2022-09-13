import { getTheme } from '../lib/hooks/useTheme';
import SearchIcon from './icons/SearchIcon';
import style from './InputSearch.module.css';

const InputSearch = ({ theme, setSearch }) => {
	const changeBackground = event => {
		event.target.style.background = '#61abff';
	};

	const removeBackground = event => {
		event.target.style.background = '#07f';
	};

	const themeClass = getTheme(style, theme);

	return (
		<form
			className={`${style.form} ${themeClass || ''}`}
			onSubmit={ev => {
				ev.preventDefault();
				setSearch(ev.target.search.value);
			}}
		>
			<SearchIcon className={style.icon} />
			<input
				className={style.input}
				type='text'
				name='search'
				placeholder='Buscar usuario....'
			/>
			<button
				className={style.button}
				type='submit'
				onMouseOver={ev => changeBackground(ev)}
				onMouseOut={ev => removeBackground(ev)}
			>
				Buscar
			</button>
		</form>
	);
};

export default InputSearch;
