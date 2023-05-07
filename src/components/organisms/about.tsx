// External Imports
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';
import Terrarium from '@/assets/heros/Initiative.jpg';

const About = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <motion.section
            className="sm:px-6 md:px-24 xl:px-48 py-24 sm:py-44"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
        >
            <div className="relative overflow-hidden px-6 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 gradient-text">
                                    {t.about_subtitle}
                                </p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-default-dark dark:text-default-light sm:text-4xl">
                                    {t.about_title}
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-text-dark dark:text-text-light">
                                    {t.about_subtext}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <Image
                                src={Terrarium}
                                className="w-[48rem] rounded-xl shadow-xlsm:w-[57rem]"
                                alt="Terrarium"
                            />
                        </motion.div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-default-dark dark:text-default-light lg:max-w-lg">
                                <p>{t.about_text}</p>

                                <p className="mt-8">{t.about_text_2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
