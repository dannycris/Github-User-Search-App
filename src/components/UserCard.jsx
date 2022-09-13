import { formatDate } from '../lib/constants/dates';
import { getTheme } from '../lib/hooks/useTheme';
import LinkIcon from './icons/LinkIcon';
import LocationIcon from './icons/LocationIcon';
import SocialIcon from './icons/SocialIcon';
import WebIcon from './icons/WebIcon';
import style from './UserCard.module.css';

const UserCard = ({ user, error, loading, theme }) => {
	if (Object.keys(user).length === 0) return <div>Cargando Usuario....</div>;
	if (loading) return <div>Cargando....</div>;
	if (error) return <div>Error al Cargar Usuario...</div>;
	const themeClass = getTheme(style, theme);

	return (
		<div className={`${style.wrapper} ${themeClass || ''}`}>
			<div className={style.userAvatar}>
				<div className={style.avatar}>
					<img src={user.avatar_url} />
				</div>

				<div className={style.userName}>
					<div className={style.nameContainer}>
						<span className={style.name}>{user.name}</span>
						<span className={style.nickName}>{'@' + user.login || '@'}</span>
					</div>

					<span className={style.joined}>
						{'Joined ' + formatDate(user.created_at)}
					</span>
				</div>
			</div>
			<div className={style.bio}>
				<span>{user.bio || 'This profile has no bio.'}</span>
			</div>

			<div className={`${style.counters} ${themeClass || ''}`}>
				<div className={style.counter}>
					<span className={style.couterTitle}>Repo</span>
					<span className={style.couterNumber}>{user.public_repos}</span>
				</div>
				<div className={style.counter}>
					<span className={style.couterTitle}>Followers</span>
					<span className={style.couterNumber}>{user.followers}</span>
				</div>
				<div className={style.counter}>
					<span className={style.couterTitle}>Following</span>
					<span className={style.couterNumber}>{user.following}</span>
				</div>
			</div>
			<div className={style.links}>
				<div className={style.link}>
					<LocationIcon className={style.icon} />
					<span>{user.location || 'Not Available'}</span>
				</div>

				<div className={style.link}>
					<LinkIcon className={style.icon} />
					<span>
						<a href={user.blog}>blog</a>
					</span>
				</div>
				<div className={style.link}>
					<SocialIcon className={style.icon} />
					<span>{user.twitter_username || 'Not Available'}</span>
				</div>
				<div className={style.link}>
					<WebIcon className={style.icon} />
					<span>
						<a href={user.html_url}>@github</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
