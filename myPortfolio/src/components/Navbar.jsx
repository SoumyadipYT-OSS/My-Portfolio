import logo from "../assets/soumyadipMajumderLogo.png"
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="image not loaded" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                <FaLinkedin className="text-blue-500" />
                <FaGithub className="text-violet-600" />
                <FaSquareXTwitter className="text-neutral-100" />
                <FaInstagram className="text-white bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>
        </nav>
    </>
  );
}

export default Navbar;