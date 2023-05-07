// External Imports
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type PolaroidProps = {
    title: string;
    desc: string;
    src: StaticImageData;
};

const Polaroid = ({ title, desc, src }: PolaroidProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className={`bg-default-light w-96 flex flex-col items-center shadow-2xl`}
        >
            <Image
                className="w-80 aspect-square mt-8 rounded-xl object-cover"
                src={src}
                alt="Picture of a Terrarium"
            />
            <div className="flex flex-col justify-center items-center my-6 gap-2 font-extrabold text-2xl">
                <div>{title}</div>
                <div>{desc}</div>
            </div>
        </motion.div>
    );
};

export default Polaroid;
