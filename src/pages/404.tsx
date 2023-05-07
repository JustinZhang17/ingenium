// External Imports
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';

const FourOhFour = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <>
            <motion.h1
                className={
                    'gradient-text font-extrabold md:text-7xl xl:text-8xl 2xl:text-9xl flex justify-center items-center h-screen w-screen text-center'
                }
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <div>{t.error_page}</div>
            </motion.h1>
        </>
    );
};

export default FourOhFour;
