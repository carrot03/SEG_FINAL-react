import { useEffect, useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import NavBar from "./NavBar/NavBar.js";
import Hero from "./Hero/Hero.js";
import Menu from "./Menu/Menu.js";
import Review from "./Reviews/Review.js";
import Contactus from "./Contactus/Contactus";
import './App.css';


function App() {
	const [pageScroll, setPageScroll] = useState(0);
	useEffect(() => {
		const onScroll = () => setPageScroll(window.scrollY);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
	<>
    	<I18nextProvider i18n={i18n}></I18nextProvider>
    	<NavBar/>
		<Hero/>
		<Menu />
		<Review/>
		<Contactus/>
	</>
	);
}

export default App;
