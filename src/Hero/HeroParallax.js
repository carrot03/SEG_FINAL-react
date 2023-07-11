import { Parallax } from 'react-parallax';
import Hero from './Hero.js';
import backgroundimg from '../images/backgroundimg.jpg';
import logo from '../images/logo.png';
import './HeroParallax.css';

const HeroParallax = () => (

    <Parallax className="Hero-parallax" bgImage={backgroundimg} bgImageAlt="oops! I guess we missed an image here..." strength={200} height='50rem'>
        <div className="Hero-img">
            <img  src={logo} className='logo-img' alt='Bless Roll cafe'>
                </img>
        </div>
    </Parallax>
);

export default HeroParallax;