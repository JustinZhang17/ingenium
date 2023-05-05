// External Imports
import { motion } from 'framer-motion';

// Internal Imports
import Divider from '@/components/molecules/divider';

const Chat = (): JSX.Element => {
    return (
        <>
            <motion.h1
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className=" gradient-text py-12 px-0 text-5xl font-extrabold md:px-2 md:text-6xl xl:text-7xl 2xl:text-8xl text-center"
            >
                Climate Bot
            </motion.h1>
            <Divider />
        </>
    );
};

export default Chat;
