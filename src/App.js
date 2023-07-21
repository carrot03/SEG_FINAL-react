import { useEffect, useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar/NavBar.js";
import HeroParallax from "./Hero/HeroParallax.js";
import Hero from "./Hero/Hero.js";
import Menu from "./Menu/Menu.js";
import Review from "./Reviews/Review.js";
import Footer from './Footer/Footer';
import Contactus from "./Contactus/Contactus";
import './App.css';


const App = () => {

	return (
	<Router basename="/SEG_FINAL-react">
    	<I18nextProvider i18n={i18n}></I18nextProvider>
    	<NavBar />
		<Routes>
		<Route exact path="/" element={<Hero/>} />
		<Route exact path="/about" element={<Hero/>} />
		<Route path="/menu"  element={<Menu/>} />
		<Route path="/reviews"  element={<Review/>} />
		<Route path="/Contactus"  element={<Contactus/>} />
		</Routes>
		<Footer/>
	</Router>
	);
};

export default App;
