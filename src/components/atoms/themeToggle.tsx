// External Imports
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

// Internal Imports
import themeSwitch from '@/utils/themeSwitcher';

const ThemeToggle = (): JSX.Element => {
    const [colorTheme, setTheme] = themeSwitch();

    return (
        <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            aria-label="Toggle Dark/Light Mode"
            onClick={() => {
                setTheme(colorTheme === 'light' ? 'dark' : 'light');
            }}
        >
            {colorTheme === 'light' ? (
                <HiMoon
                    className={
                        'h-8 w-auto text-default-dark dark:text-default-light hover:text-secondary-dark hover:dark:text-secondary-light'
                    }
                />
            ) : (
                <HiSun
                    className={
                        'h-8 w-auto text-default-dark dark:text-default-light hover:text-secondary-dark hover:dark:text-secondary-light'
                    }
                />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
