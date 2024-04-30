import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants/index.js';
import '../components/Hero.css';

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-2xl sm:text-3xl md:text-4xl">
                About <span className="text-neutral-500">Me</span>
            </h1>
            <div className="flex flex-col md:flex-row flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl w-3/4 h-auto' src={aboutImg} alt="about" />
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='flex justify-center md:justify-start mt-2 fade-in'>
                        <p className='my-2 max-w-xl py-6 text-sm sm:text-base md:text-lg'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
