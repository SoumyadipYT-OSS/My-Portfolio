import { HERO_CONTENT } from '../constants/index.js';
import myProfilePic from '../assets/soumyadipMajumderProfile.png';
import { motion } from 'framer-motion';
import '../components/Hero.css';

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 light-line">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 className="pb-16 text-3xl lg:text-6xl font-thin tracking-tight lg:mt-13"
                            animate={{ x: 50 }}
                            transition={{ duration: 2, ease: "easeInOut" }}>
                            Soumyadip Majumder
                        </motion.h1>
                        <span className="bg-gradient-to-r from-amber-500 to-pink-500
                      bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter fade-in'>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 lg:ml-0 mt-4 lg:mt-0 z-20'>
                    <div className='flex justify-center'>
                        <div className='crystal-border'>
                            <img className='rounded-sm' src={myProfilePic} alt="Soumyadip Majumder" height="330px" width="330px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;