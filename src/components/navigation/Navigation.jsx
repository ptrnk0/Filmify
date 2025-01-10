import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};

	return (
		<nav>
			<NavLink to="/" className={buildLinkClass}>
				Home
			</NavLink>
			<NavLink to="/movies" className={buildLinkClass}>
				Movies
			</NavLink>
		</nav>
	);
};

export default Navigation;
