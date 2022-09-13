import { useEffect, useRef } from 'react';
import { getTheme } from '../../lib/hooks/useTheme';
import style from './CustomCursor.module.css';

const CustomCursor = ({ theme }) => {
	const cursorRef = useRef(null);

	const themeClass = getTheme(style, theme);

	useEffect(() => {
		document.addEventListener('mousemove', event => {
			const { clientX, clientY } = event;

			const mouseX = clientX - cursorRef.current.clientWidth / 2;
			const mouseY = clientY - cursorRef.current.clientHeight / 2;

			cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px)`;
		});
	}, []);

	return (
		<div
			className={`${style.cursor} ${themeClass || ''}`}
			ref={cursorRef}
		></div>
	);
};

export default CustomCursor;
