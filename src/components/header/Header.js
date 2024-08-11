import Logo from '../../assets/images/logo.svg';
import DownArrow from '../../assets/images/down-arrow.svg';
import Github from '../../assets/images/Github.svg';
import { useState } from 'react';


function Header() {
    let [language, setlanguage] = useState("EN");

    const changeLanguage = (e) => {
        console.log(language)
        setlanguage(e.target.innerHTML)
    }
    return (
        <div className='flex justify-between bg-background p-4 items-center container mx-auto'>
            <div className='flex items-center'>
                <img src={Logo} alt="najaf" />
                <span className='text-white font-bold mx-3'>Ali</span>
            </div>
            <div className='flex flex-row justify-between'>
                <a href="" className='text-secondary mx-3 hover:bg-activatedBackground'><span className='text-primary'>#</span>works</a>
                <a href="" className='text-secondary mx-3 hover:bg-activatedBackground'><span className='text-primary'>#</span>about-me</a>
                <a href="" className='text-secondary mx-3 hover:bg-activatedBackground'><span className='text-primary'>#</span>contacts</a>
                <a href="" className='text-secondary mx-3 hover:bg-activatedBackground'><span className='text-primary'>#</span>home</a>
                <div className='relative text-secondary ms-2 flex hover:bg-activatedBackground select-none group'>
                    <span>{language}</span>
                    <img src={DownArrow} alt="" width={15} />
                    <div className='absolute hidden group-hover:block top-5 bg-background p-2'>
                        <button onClick={changeLanguage} className='hover:bg-[#16181b]'>EN</button>
                        <button onClick={changeLanguage} className='hover:bg-[#16181b]'>FA</button>
                    </div>
                </div>
            </div>
            <div className='absolute left-10 top-0'>
                <div className='absolute left-1/2 border-l border-secondary h-full'></div>
                <div className='relative flex flex-col mt-20 pt-2 z-10 bg-[#282C33]'>
                    <img src={Github} alt="" />
                    <img src={Github} alt="" />
                    <img src={Github} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;