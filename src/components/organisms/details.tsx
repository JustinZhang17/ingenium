// External Imports
import Image from 'next/image';
import { motion } from 'framer-motion';

// Internal Imports
import TerrariumA from '@/assets/heros/terrarium-1.jpg';
import TerrariumB from '@/assets/heros/terrarium-2.jpg';
import TerrariumC from '@/assets/heros/terrarium-3.jpg';
import TerrariumD from '@/assets/heros/terrarium-4.jpg';
import DetailItem from '@/components/atoms/detailItem';

const Details = (): JSX.Element => {
    return (
        <motion.section
            className="sm:px-6 md:px-24 xl:px-48 py-24 sm:py-44"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
        >
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4  sm:px-6  lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-default-dark dark:text-default-light sm:text-4xl">
                        Lorem Ipsum Words
                    </h2>
                    <p className="mt-4 text-default-dark dark:text-default-light">
                        Nunc vel vestibulum nisi. Pellentesque finibus, velit
                        quis suscipit facilisis, neque sem convallis ante, eget
                        vulputate est orci nec mi. Morbi et faucibus metus.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
                        <DetailItem
                            title="Lorem Ipsum"
                            desc="More Lorem Ipsum"
                        />
                        <DetailItem
                            title="Lorem Ipsum"
                            desc="More Lorem Ipsum"
                        />
                        <DetailItem
                            title="Lorem Ipsum"
                            desc="More Lorem Ipsum"
                        />
                        <DetailItem
                            title="Lorem Ipsum"
                            desc="More Lorem Ipsum"
                        />
                    </dl>
                </div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 sticky top-4 "
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Image
                            src={TerrariumA}
                            alt="Image of a Terrarium"
                            className="rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Image
                            src={TerrariumB}
                            alt="Image of a Terrarium"
                            className="rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Image
                            src={TerrariumC}
                            alt="Image of a Terrarium"
                            className="rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Image
                            src={TerrariumD}
                            alt="Image of a Terrarium"
                            className="rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Details;
