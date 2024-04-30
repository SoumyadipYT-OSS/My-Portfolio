import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SOA from '/SOA.png';
import ABSS from '/ABSS.png';

const educationData = [
    {
        degree: "B.Tech in CSE",
        institute: "Siksha 'O' Anusandhan University",
        logo: SOA,
    },
    {
        degree: "Higher Secondary Education",
        institute: "Ashoknagar Boys' Secondary High School",
        logo: ABSS,
    },
];





const Education = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-col items-center justify-center" ref={ref}>
                <h1 className="my-8 text-center text-2xl sm:text-3xl md:text-4xl">Education</h1>
                <div className="relative m-8">
                    <div className="border-r-2 border-blue-500 absolute h-full top-0 p-3" style={{ left: '15px' }}></div>
                    {educationData.map((data, idx) => (
                        <motion.div
                            className="mb-8 flex justify-between items-center w-full right-timeline"
                            animate={controls}
                            initial="hidden"
                            transition={{ duration: 0.5, ease: "easeInOut", delay: idx * 0.2 }}
                            variants={{
                                visible: { x: -100 },
                                hidden: { x: 0 },
                            }}
                            key={idx}
                        >
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full relative overflow-hidden">
                                <img src={data.logo} alt={data.institute} className="object-cover w-full h-full" />
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4 ml-8">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">{data.degree}</h3>
                                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{data.institute}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
