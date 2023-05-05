// External Imports
import { useEffect, useState } from 'react';

const useDarkMode = (): [
    string,
    React.Dispatch<React.SetStateAction<string>>
] => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return [theme, setTheme];
};

export default useDarkMode;
