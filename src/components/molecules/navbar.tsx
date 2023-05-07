// External Imports
import React from 'react';
import { FaRobot } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { AiFillHome, AiFillBug } from 'react-icons/ai';
import { MdPhoto } from 'react-icons/md';
import { useRouter } from 'next/router';

// Internal Imports
import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/themeToggle';
import NavLink from '@/components/atoms/navLink';
import en from '@/locales/en';
import fr from '@/locales/fr';

type NavbarProps = {
    setTab: (href: string) => void;
};

const Navbar = ({ setTab }: NavbarProps): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-text-light dark:bg-text-dark sm:bg-transparent sm:dark:bg-transparent sm:backdrop-blur-md">
                <div className="flex h-full justify-between mx-auto font-medium">
                    <div className="ml-3 sm:mx-6 mt-2 md:mt-0">
                        <Logo />
                    </div>

                    {/* Desktop */}
                    <div className="hidden sm:flex items-center mx-6">
                        <NavLink href={'initiative'} setTab={setTab}>
                            {t.nav_about}
                        </NavLink>
                        <NavLink href={'how-to'} setTab={setTab}>
                            {t.nav_how_to}
                        </NavLink>
                        <NavLink href={'isopod'} setTab={setTab}>
                            {t.nav_classify}
                        </NavLink>
                        <NavLink href={'chatbot'} setTab={setTab}>
                            {t.nav_bot}
                        </NavLink>
                        <NavLink href={'inspo'} setTab={setTab}>
                            {t.nav_inspo}
                        </NavLink>
                        <ThemeToggle />
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-grow sm:hidden items-center justify-around mr-3 gap-1">
                        <NavLink href={'initiative'} setTab={setTab}>
                            <AiFillHome size={30} />
                        </NavLink>
                        <NavLink href={'how-to'} setTab={setTab}>
                            <IoIosPaper size={30} />
                        </NavLink>
                        <NavLink href={'isopod'} setTab={setTab}>
                            <AiFillBug size={30} />
                        </NavLink>
                        <NavLink href={'chatbot'} setTab={setTab}>
                            <FaRobot size={30} />
                        </NavLink>
                        <NavLink href={'inspo'} setTab={setTab}>
                            <MdPhoto size={30} />
                        </NavLink>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

{
    /* <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <span className="text-lg text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </button> */
}
