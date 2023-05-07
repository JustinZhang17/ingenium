// External imports
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiArrowDown } from 'react-icons/fi';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';

const Hero = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;

    return (
        <section>
            <div className={'h-screen md:grid place-content-center hidden'}>
                <div>
                    <motion.p
                        className={
                            'font py-5 font-extrabold md:text-6xl xl:text-8xl 2xl:text-9xl text-default-dark dark:text-default-light'
                        }
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        {t.slogan_1}
                    </motion.p>
                    <motion.span
                        className={
                            'ml-24 gradient-text py-5 font-extrabold md:text-7xl xl:text-8xl 2xl:text-9xl'
                        }
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        {t.slogan_2}
                    </motion.span>
                    <motion.p
                        className={
                            'ml-48 py-5 font-extrabold md:text-7xl xl:text-8xl 2xl:text-9xl text-default-dark dark:text-default-light'
                        }
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        {t.slogan_3}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 1, delay: 10 },
                    }}
                    transition={{ duration: 1 }}
                >
                    <FiArrowDown className="animate-bounce absolute h-10 w-10 flex items-center flex-col left-1/2 -translate-x-1/2 bottom-24 text-default-dark dark:text-default-light" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
