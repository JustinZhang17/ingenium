// External Imports
import { motion } from 'framer-motion';

type VideoProps = {
    src: string;
};

const Video = ({ src }: VideoProps): JSX.Element => {
    return (
        <motion.section
            className="sm:px-6 md:px-24 xl:px-48 py-24 sm:py-44 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
        >
            <iframe
                className=" rounded-3xl"
                width="1280"
                height="720"
                src={
                    src ??
                    'https://www.youtube.com/embed/LxgMdjyw8uw?list=PLFs4vir_WsTysVwsTy7hVL89W2MdQtU_k'
                }
                title="We WILL Fix Climate Change!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            ></iframe>
        </motion.section>
    );
};

export default Video;
