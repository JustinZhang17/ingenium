// External Imports
import Image from 'next/image';
import { motion } from 'framer-motion';

// Internal Imports
import Terrarium from '@/assets/heros/terrarium-hero-dark.jpg';

const About = (): JSX.Element => {
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
                                    Cleaning Up The World One Terrarium At A
                                    Time
                                </p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-default-dark dark:text-default-light sm:text-4xl">
                                    More Lorem Ipsum
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-text-dark dark:text-text-light">
                                    Aliquet nec orci mattis amet quisque
                                    ullamcorper neque, nibh sem. At arcu, sit
                                    dui mi, nibh dui, diam eget aliquam. Quisque
                                    id at vitae feugiat egestas.
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
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat.
                                    Dignissim sed eget risus enim. Mattis mauris
                                    semper sed amet vitae sed turpis id. Id
                                    dolor praesent donec est. Odio penatibus
                                    risus viverra tellus varius sit neque erat
                                    velit. Faucibus commodo massa rhoncus,
                                    volutpat. Dignissim sed eget risus enim.
                                    Mattis mauris semper sed amet vitae sed
                                    turpis id.
                                </p>

                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus
                                    commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor fermentum dignissim.
                                    Lacus diam tincidunt ac cursus in vel.
                                    Mauris varius vulputate et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac
                                    tempor et ut. Ac lorem vel integer orci.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
