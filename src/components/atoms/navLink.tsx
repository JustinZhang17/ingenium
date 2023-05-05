// External Imports
import { motion } from 'framer-motion';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    setTab: (href: string) => void;
};

const NavLink = ({ href, setTab, children }: NavLinkProps): JSX.Element => {
    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            onClick={() => {
                setTab(href);
            }}
            className="p-2 lg:p-4 text-lg font-bold text-default-dark dark:text-default-light hover:text-secondary-dark hover:dark:text-secondary-light cursor-pointer transition-colors duration-300 ease-in-out"
        >
            {children}
        </motion.button>
    );
};

export default NavLink;
