import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constent';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Nav = () => {
    useGSAP(()=>{
    gsap.from('#link',{
        y:-100,
        duration:1.5,
        opacity:0,
        ease:'back.out',
        stagger:{
            amount:1,
            axis:'y',
            grid: [2,1],
            from: 'center',
        }
    })
    },[]);
    const [tap, setTap] = useState("false")
    const handleClick = () => {
        setTap(preValue => {
            return !preValue;
        })
    }
  return (
    <header className={`padding-x py-8 ${tap ? 'absolute': 'relative' } z-10 w-full`}>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li id='link' key={item.label}>
                        <a 
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                        {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block' onClick={handleClick}>
                <img src={hamburger} alt="Hamburger" height={25} width={25}/>
            </div>
        </nav>
        <div>
            <ul className={`flex-1 flex flex-col mt-5 justify-center items-center lg:hidden transition-transform gap-8 ${!tap ?null: 'hidden'}`}>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                            {item.label}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    </header>
  )
}

export default Nav;