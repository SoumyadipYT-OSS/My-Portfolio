import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const contactDetails = [
    {
        label: "Address:",
        icon: <ImLocation2 />,
        value: "Ashoknagar, North 24 Parganas, West Bengal, India - 743222"
    },
    {
        label: "Phone:",
        icon: <FaPhone />,
        value: "+91 1234567890"
    },
    {
        label: "Email:",
        icon: <SiMinutemailer />,
        value: "soumyadipmajumder03@outlook.com"
    },
];

const Contact = () => {
    return (
        <>
            <h1 className="my-8 text-center text-2xl sm:text-3xl md:text-4xl p-10 mt-10">Contact</h1>
            <div className="bg-slate-950 p-4 sm:p-20 rounded-sm bg-opacity-35">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                    {contactDetails.map((detail, i) => {
                        return (
                            <div key={i} className='flex flex-col items-center sm:space-x-24'>
                                <div className='bg-yellow-800 rounded-full p-2 sm:p-6 mb-4'>
                                    <h2 className="text-white text-2xl sm:text-3xl">{detail.icon}</h2>
                                </div>
                                <div className="w-full sm:w-56 overflow-auto">
                                    <p className="text-yellow-900 font-normal text-sm sm:text-md">{detail.label}</p>
                                    <p className="text-white font-extralight text-xs sm:text-sm">{detail.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <h2 className="text-white text-lg mb-4 p-6 pl-10">Get in touch with us</h2>
                <form className="flex flex-col space-y-4 p-6 pl-10">
                    <input className="bg-gray-700 text-white rounded-md py-2 px-4 w-full sm:w-3/4" type="text" placeholder="Name" />
                    <input className="bg-gray-700 text-white rounded-md py-2 px-4 w-full sm:w-3/4" type="email" placeholder="Email" />
                    <input className="bg-gray-700 text-white rounded-md py-2 px-4 w-full sm:w-3/4" type="text" placeholder="Subject" />
                    <textarea className="bg-gray-700 text-white rounded-md py-2 px-4 w-full sm:w-3/4" placeholder="Message"></textarea>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-3/4" type="submit">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;