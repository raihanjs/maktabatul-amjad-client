import { useState } from "react";
import { LuPhoneCall, LuMail, LuShoppingCart, LuGlobe, LuUser, LuSettings, LuLogIn  } from "react-icons/lu";

import Usa from '../../../assets/icons/usa.png';
import Saudi from '../../../assets/icons/saudi.png';
import Bangladesh from '../../../assets/icons/bd.png';

export default function HeaderTop(){

    const [accountBtn,setAccountBtn] = useState(false);
    const [languageBtn,setLanguageBtn] = useState(false);

    const handleSetLanguage = lang => {
        setLanguageBtn(false);        
        const maktabatulAmjadSettings = {language: lang};
        localStorage.setItem('maktabatulAmjadSettings', JSON.stringify(maktabatulAmjadSettings))
    }

    return (
        <div className="py-2 bg-black text-white text-sm">
            <div className="container">
                <div className="flex justify-center sm:justify-between items-center">
                    {/* Mail & Phone */}
                    <div className="hidden sm:flex items-center gap-2 md:gap-5">
                        <div className="flex items-center gap-1">
                            <LuPhoneCall  className="mt-0.5"/>
                            <a href="tel:+880145544744484">(880) 145544744484</a>
                        </div>
                        <div className="flex items-center gap-1">
                            <LuMail className="mt-0.5" />
                            <a href="mailto:amjad@gmail.com">amjad@gmail.com</a>
                        </div>
                    </div>
                    {/* User Cart, Language & Settings */}
                    <div className="flex items-center gap-2 md:gap-5">
                        {/* User Cart */}
                        <div className="flex items-center gap-1">
                            <LuShoppingCart className="text-lg"/>
                            <p>Cart (<span>0 item</span>)</p>
                        </div>
                        {/* User Language Setting */}
                        <div className="relative flex items-center gap-1">
                            <LuGlobe/>
                            <button onClick={() => setLanguageBtn(!languageBtn)}>Language</button>
                            {
                                languageBtn && 
                                    <div className="absolute top-6 right-0 bg-white rounded-sm shadow-lg">
                                        <ul className="text-black py-2 w-28">
                                            <li className="flex items-center gap-2 hover:bg-gray py-1 px-2" onClick={()=> {handleSetLanguage('bn')}}><img src={Bangladesh} className="w-6" alt="Bangladesh Flag" />Bangla</li>
                                            <li className="flex items-center gap-2 hover:bg-gray py-1 px-2" onClick={()=> {handleSetLanguage('ar')}}><img src={Saudi} className="w-6" alt="Saudi Arabia Flag" /> Arabic</li>
                                            <li className="flex items-center gap-2 hover:bg-gray py-1 px-2" onClick={()=> {handleSetLanguage('en')}}><img src={Usa} className="w-6" alt="United States Flag" /> English</li>
                                        </ul>
                                    </div>
                            }
                        </div>
                        {/* User Account */}
                        <div className="relative flex items-center gap-1">
                            <LuUser/>
                            <button onClick={() => setAccountBtn(!accountBtn)}>Account</button>
                            {
                                accountBtn && 
                                    <div className="absolute top-6 right-0 bg-white rounded-sm shadow-lg">
                                        <ul className="text-black py-2 w-40">
                                            <li className="flex items-center gap-2 hover:bg-gray py-1 px-2"><LuSettings/> Profile</li>
                                            <li className="flex items-center gap-2 hover:bg-gray py-1 px-2"><LuLogIn/> Login</li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}