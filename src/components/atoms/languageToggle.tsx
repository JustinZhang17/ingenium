// External Imports
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// Internal Imports
import en from '@/locales/en';
import fr from '@/locales/fr';

const LanguageToggle = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

    const changeLanguage = () => {
        const locale = router.locale === 'en' ? 'fr' : 'en';
        router.push('/', '/', { locale });
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle English/French"
            onClick={changeLanguage}
            className="text-xl z-50 fixed right-5 top-3 flex font-extrabold justify-center text-default-dark dark:text-default-light"
        >
            {t === en ? (
                <>
                    <span className="gradient-text">EN&nbsp; </span> / FR
                </>
            ) : (
                <>
                    EN / <span className="gradient-text">&nbsp;FR</span>
                </>
            )}
        </motion.button>
    );
};

export default LanguageToggle;
