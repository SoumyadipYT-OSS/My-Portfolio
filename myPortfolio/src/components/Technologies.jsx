import ReactJS_Logo from '/React.svg';
import ASP_DOTNET_Logo from '/ASP_dotnet.svg';
import { SiDotnet, SiJavascript, SiBlazor, SiTypescript, SiCisco } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import NodeJS_Logo from '/NodeJS.svg';
import MongoDB_Logo from '/MongoDB.svg';
import MCST_SQL_Logo from '/microsoft-sql-server-logo.svg';
import Csharp_Logo from '/Csharp.svg';
import Python_Logo from '/Python.svg';
import GCP_Logo from '/GCP.svg';
import AWS_Logo from '/Aws.svg';
import AZURE_Logo from '/Azure.svg';

import '../components/Technologies.css';



const techs = [
    { logo: ReactJS_Logo, alt: 'ReactJS Logo', className: 'h-12 w-12', bg: 'bg-neutral-200' },
    { logo: ASP_DOTNET_Logo, alt: 'ASP.NET Logo', className: 'h-12 w-12', bg: 'bg-neutral-50' },
    { component: <SiDotnet className='text-5xl text-white' />, bg: 'bg-indigo-700' },
    { component: <SiJavascript className='rounded-md text-5xl text-yellow-400 bg-white' />, bg: 'bg-yellow-400' },
    { component: <SiBlazor className='rounded-md text-5xl text-violet-800' />, bg: 'bg-slate-50' },
    { component: <SiTypescript className='rounded-md text-5xl text-blue-500 bg-white' />, bg: 'bg-blue-500' },
    { logo: NodeJS_Logo, alt: 'NodeJS Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { logo: MongoDB_Logo, alt: 'MongoDB Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { logo: MCST_SQL_Logo, alt: 'Microsoft SQL Server Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { component: <GrOracle className='rounded-md text-5xl text-red-600 bg-white' />, bg: 'bg-white' },
    { component: <SiCisco className='rounded-md text-5xl text-sky-400 bg-white' />, bg: 'bg-white' },
    { component: <FcLinux className='rounded-md text-5xl bg-white' />, bg: 'bg-white' },
    { logo: Csharp_Logo, alt: 'C# Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { logo: Python_Logo, alt: 'Python Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { logo: GCP_Logo, alt: 'Google Cloud Platform Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { logo: AWS_Logo, alt: 'Amazon Web Services Logo', className: 'h-12 w-12', bg: 'bg-white' },
    { logo: AZURE_Logo, alt: 'Microsoft Azure Logo', className: 'h-12 w-12', bg: 'bg-white' },
];


const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-8 float-animation pb-10">
                {techs.map((tech, i) => (
                    <div key={i} className={`rounded-2xl border-4 border-neutral-700 p-4 ${tech.bg}`} style={{ '--i': i }}>
                        {tech.logo ? (
                            <img src={tech.logo} alt={tech.alt} className={tech.className} />
                        ) : (
                            tech.component
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
