import Logo from '../../assets/images/logo.svg';
import DownArrow from '../../assets/images/down-arrow.svg';
import { useState } from 'react';


function Header() {
    let [language, setlanguage] = useState("EN");

    const changeLanguage = (e) => {
        console.log(language)
        setlanguage(e.target.innerHTML)
    }
    return (
        <div className='flex justify-between bg-[#282C33] p-4 items-center'>
            <div className='flex items-center'>
                <img src={Logo} alt="najaf" />
                <span className='text-[#fff] font-bold mx-3'>Ali</span>
            </div>
            <div className='flex flex-row justify-between'>
                <a href="" className='text-[#ABB2BF] mx-3 hover:bg-[#16181b]'><span className='text-[#C778DD]'>#</span>works</a>
                <a href="" className='text-[#ABB2BF] mx-3 hover:bg-[#16181b]'><span className='text-[#C778DD]'>#</span>about-me</a>
                <a href="" className='text-[#ABB2BF] mx-3 hover:bg-[#16181b]'><span className='text-[#C778DD]'>#</span>contacts</a>
                <a href="" className='text-[#ABB2BF] mx-3 hover:bg-[#16181b]'><span className='text-[#C778DD]'>#</span>home</a>
                <div className='relative text-[#ABB2BF] ms-2 flex hover:bg-[#16181b] select-none group'>
                    <span>{language}</span>
                    <img src={DownArrow} alt="" width={15} />
                    <div className='absolute hidden group-hover:block top-5 bg-[#282C33] p-2'>
                        <button onClick={changeLanguage} className='hover:bg-[#16181b]'>EN</button>
                        <button onClick={changeLanguage} className='hover:bg-[#16181b]'>FA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;