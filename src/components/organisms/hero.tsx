// External imports
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = (): JSX.Element => {
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
                        Cleaning Up The World
                    </motion.p>
                    <motion.span
                        className={
                            'ml-24 gradient-text py-5 font-extrabold md:text-7xl xl:text-8xl 2xl:text-9xl'
                        }
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        One Terrarium
                    </motion.span>
                    <motion.p
                        className={
                            'ml-48 py-5 font-extrabold md:text-7xl xl:text-8xl 2xl:text-9xl text-default-dark dark:text-default-light'
                        }
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        At A Time.
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
