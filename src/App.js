import { useEffect, useState } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar/NavBar.js";
import HeroParallax from "./Hero/HeroParallax.js";
import Menu from "./Menu/Menu.js";
import Review from "./Reviews/Review.js";
import Contactus from "./Contactus/Contactus";
import './App.css';


const App = () => {
	useEffect(() => {
		// Function to update the URL when the user scrolls
		const handleScroll = () => {
		  const scrollY = window.scrollY;
		  const path = window.location.pathname;
	
		  // Define the sections on your website and their corresponding URLs
		  const sections = {
			'/': 0, // Home section
			'/about': 70, // About section, assuming it starts at 700px from the top
			'/contact': 1400, // Contact section, assuming it starts at 1400px from the top
			// Add more sections as needed
		  };
	
		  // Find the current section based on the scroll position
		  let currentSection = '/';
		  Object.entries(sections).forEach(([section, offset]) => {
			if (scrollY >= offset) {
			  currentSection = section;
			}
		  });
		  
	
		  // Update the URL only if it's different from the current one
		  if (path !== currentSection) {
			window.history.replaceState(null, '', currentSection);
		  }
		};
		    // Attach the scroll event listener when the component mounts
			window.addEventListener('scroll', handleScroll);

			// Remove the scroll event listener when the component unmounts
			return () => {
			  window.removeEventListener('scroll', handleScroll);
			};
		  }, []);

	return (
	<Router basename="/SEG_FINAL-react">
    	<I18nextProvider i18n={i18n}></I18nextProvider>
    	<NavBar />
		<Routes>
		<Route path="/Home" exact component={<HeroParallax/>} />
		<Route path="/Menu" exact component={<Menu/>} />
		<Route path="/Reviews" exact component={<Review/>} />
		<Route path="/Contact-us" exact component={<Contactus/>} />
		</Routes>
	</Router>
	);
};

export default App;
